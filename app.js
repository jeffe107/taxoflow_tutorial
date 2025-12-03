(function () {
  const files = [
    { id: 'index', path: 'markdown/index.md', label: 'Overview' },
    { id: 'orientation', path: 'markdown/00_orientation.md', label: 'Orientation' },
    { id: 'pipeline', path: 'markdown/01_pipeline.md', label: 'Part 1: Pipeline' },
    { id: 'simple', path: 'markdown/02_single-sample.md', label: 'Part 2: Single sample' },
    { id: 'multi', path: 'markdown/03_multi-sample.md', label: 'Part 3: Multi-sample' },
  ];

  const els = {
    nav: document.getElementById('file-nav'),
    doc: document.getElementById('doc'),
    toc: document.getElementById('toc'),
    toggleToc: document.getElementById('toggle-toc'),
    toggleTheme: document.getElementById('toggle-theme'),
    prev: document.getElementById('prev-page'),
    next: document.getElementById('next-page'),
  };

  function rewriteAssetPaths(md) {
    return md
      // Normalize assets/* paths used in upstream content
      .replaceAll('../../assets/img/', '../assets/')
      .replaceAll('assets/img/', '../assets/')
      .replaceAll('../../assets/', '../assets/')
      .replaceAll('(assets/', '(../assets/')
      // Fix markdown image links that use images/* relative to the markdown file
      .replaceAll('](images/', '](markdown/images/')
      .replaceAll('](./images/', '](markdown/images/')
      // Fix raw HTML <img src="images/..."> used in markdown
      .replaceAll('src="images/', 'src="markdown/images/')
      .replaceAll('src="./images/', 'src="markdown/images/');
  }

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  }

  function parseFenceMeta(info) {
    const attrs = {};
    if (!info) return { lang: '', attrs };
    const attrPattern = /(\w+)\s*=\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^\s]+)/g;
    let match;
    while ((match = attrPattern.exec(info))) {
      let value = match[2] || '';
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      attrs[match[1].toLowerCase()] = value;
    }
    attrPattern.lastIndex = 0;
    const stripped = info.replace(attrPattern, ' ').trim();
    const lang = stripped ? stripped.split(/\s+/)[0].replace(/^\./, '') : '';
    return { lang, attrs };
  }

  function parseAdmonition(lines, i) {
    const m = lines[i].match(/^!!!\s*(\w+)/);
    if (!m) return null;
    const kind = m[1].toLowerCase();
    let j = i + 1;
    const body = [];
    while (j < lines.length) {
      const line = lines[j];
      if (line.trim() === '') { body.push(''); j++; continue; }
      if (/^\s{4,}.+/.test(line)) { body.push(line.replace(/^\s{4}/, '')); j++; continue; }
      break;
    }
    return {
      next: j,
      html: `<div class="admonition ${kind}"><div class="admonition-title">${kind}</div>${parseBlocks(body.join('\n'))}</div>`
    };
  }

  function parseCodeFence(lines, i) {
    const open = lines[i].match(/^```(.*)$/);
    if (!open) return null;
    const info = (open[1] || '').trim();
    let j = i + 1;
    const body = [];
    while (j < lines.length && !/^```\s*$/.test(lines[j])) { body.push(lines[j]); j++; }
    if (j < lines.length && /^```\s*$/.test(lines[j])) j++;

    const { lang, attrs } = parseFenceMeta(info);
    const title = attrs.title || '';
    let linenumStart = null;
    if (Object.prototype.hasOwnProperty.call(attrs, 'linenums')) {
      const start = parseInt(attrs.linenums, 10);
      linenumStart = Number.isFinite(start) ? Math.max(start, 1) : 1;
    }

    const hasLineNums = Number.isFinite(linenumStart);
    const titleHtml = title ? `<div class="code-title">${escapeHtml(title)}</div>` : '';
    let codeHtml;
    if (hasLineNums) {
      codeHtml = body.map(line => {
        const safeLine = line === '' ? '&nbsp;' : escapeHtml(line);
        return `<span>${safeLine}</span>`;
      }).join('\n');
    } else {
      codeHtml = escapeHtml(body.join('\n'));
    }

    const classes = [];
    if (lang) classes.push(`language-${lang.replace(/[^\w-]+/g, '')}`);
    if (hasLineNums) classes.push('has-linenums');
    const attrsList = [];
    if (classes.length) attrsList.push(`class="${classes.join(' ')}"`);
    if (hasLineNums) attrsList.push(`style="--line-start:${linenumStart - 1};"`);
    const preAttrs = attrsList.length ? ` ${attrsList.join(' ')}` : '';

    return { next: j, html: `${titleHtml}<pre${preAttrs}><code>${codeHtml}</code></pre>` };
  }

  function parseInline(text) {
    // code
    text = text.replace(/`([^`]+)`/g, (_, c) => `<code>${escapeHtml(c)}</code>`);
    // bold, italics
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // images ![alt](src)
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => `<span class="img-wrap"><img alt="${escapeHtml(alt)}" src="${src}"></span>`);
    // links [text](href)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return text;
  }

  function parseBlocks(md) {
    const lines = md.split(/\r?\n/);
    const out = [];
    for (let i = 0; i < lines.length;) {
      const line = lines[i];
      // Raw HTML passthrough for lines starting with <
      if (/^\s*<[^>]+>/.test(line)) { out.push(line); i++; continue; }

      // Code fences
      if (/^```/.test(line)) {
        const block = parseCodeFence(lines, i);
        if (block) { out.push(block.html); i = block.next; continue; }
      }

      // Admonitions !!! note/tip
      if (/^!!!\s*\w+/.test(line)) {
        const adm = parseAdmonition(lines, i);
        if (adm) { out.push(adm.html); i = adm.next; continue; }
      }

      // Headings
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        const level = h[1].length;
        const text = h[2].trim();
        const id = slug(text);
        out.push(`<h${level} id="${id}">${parseInline(text)}</h${level}>`);
        i++;
        continue;
      }

      // Horizontal rule
      if (/^---\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

      // Lists
      if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
        const isOrdered = /^\s*\d+\.\s+/.test(line);
        const tag = isOrdered ? 'ol' : 'ul';
        const items = [];
        while (i < lines.length && ( /^\s*[-*]\s+/.test(lines[i]) || /^\s*\d+\.\s+/.test(lines[i]) )) {
          items.push(lines[i].replace(/^\s*(?:[-*]|\d+\.)\s+/, ''));
          i++;
        }
        out.push(`<${tag}>` + items.map(li => `<li>${parseInline(li)}</li>`).join('') + `</${tag}>`);
        continue;
      }

      // Paragraphs (skip empty)
      if (line.trim() === '') { out.push(''); i++; continue; }
      out.push(`<p>${parseInline(line)}</p>`);
      i++;
    }
    return out.join('\n');
  }

  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
  }

  async function load(id) {
    const file = files.find(f => f.id === id) || files[0];
    highlightActive(file.id);
    try {
      const res = await fetch(file.path, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      let md = await res.text();
      md = rewriteAssetPaths(md);
      const html = parseBlocks(md);
      els.doc.innerHTML = html;
      buildToc();
      updatePager(file.id);
      // Ensure we land at the top after navigation
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      const fileUrlWarning = location.protocol === 'file:'
        ? '<p><em>Tip:</em> If opened directly as file://, fetching local markdown may be blocked. Serve this folder with a local server.</p>'
        : '';
      els.doc.innerHTML = `<h2>Failed to load document</h2><p>${escapeHtml(String(e))}</p>${fileUrlWarning}`;
      els.toc.innerHTML = '';
    }
  }

  function buildNav() {
    els.nav.innerHTML = files.map(f => `<a data-id="${f.id}" href="#/${f.id}">${f.label}</a>`).join('');
    els.nav.addEventListener('click', (e) => {
      const a = e.target.closest('a[data-id]');
      if (!a) return;
      e.preventDefault();
      location.hash = `#/${a.dataset.id}`;
    });
    // Ensure controls appear right after nav content
  }

  function highlightActive(activeId) {
    for (const a of els.nav.querySelectorAll('a')) {
      a.classList.toggle('active', a.dataset.id === activeId);
    }
  }

  function buildToc() {
    const headers = els.doc.querySelectorAll('h2, h3');
    if (!headers.length) { els.toc.innerHTML = ''; return; }
    const items = Array.from(headers).map(h => {
      const depth = h.tagName === 'H2' ? 0 : 1;
      return `<a style="padding-left:${depth * 12}px" href="#${h.id}">${h.textContent}</a>`;
    }).join('');
    els.toc.innerHTML = `<h4>On this page</h4>${items}`;
    // Activate highlighting on click
    els.toc.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      setActiveToc(a.getAttribute('href').slice(1));
    });
    // Initialize active state
    updateTocActiveByScroll();
  }

  function setActiveToc(id) {
    for (const a of els.toc.querySelectorAll('a')) {
      const target = a.getAttribute('href').slice(1);
      a.classList.toggle('active', target === id);
    }
  }

  function updatePager(activeId) {
    const idx = files.findIndex(f => f.id === activeId);
    const prev = idx > 0 ? files[idx - 1] : null;
    const next = idx < files.length - 1 ? files[idx + 1] : null;
    els.prev.disabled = !prev;
    els.next.disabled = !next;
    els.prev.onclick = prev ? () => { location.hash = `#/${prev.id}`; } : null;
    els.next.onclick = next ? () => { location.hash = `#/${next.id}`; } : null;
  }

  function onHashChange() {
    const hash = location.hash || '';
    // Route when using our router form #/page
    const route = hash.match(/^#\/(.+)$/);
    if (route) {
      const id = route[1];
      load(id);
      return;
    }
    // In-page anchor like #section-id: just scroll, do not reload page
    const anchor = hash.match(/^#(?!\/)(.+)$/);
    if (anchor) {
      const el = document.getElementById(anchor[1]);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Default: load overview
    load(files[0].id);
  }

  function init() {
    buildNav();
    els.toggleToc.addEventListener('click', () => {
      els.toc.classList.toggle('hidden');
      const on = !els.toc.classList.contains('hidden');
      els.toggleToc.setAttribute('aria-pressed', String(on));
    });
    initTheme();
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('scroll', throttle(updateTocActiveByScroll, 100), { passive: true });
    onHashChange();
  }

  function initTheme() {
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = stored || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);
    els.toggleTheme.addEventListener('click', () => {
      const current = document.body.classList.contains('theme-light') ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  function applyTheme(theme) {
    document.body.classList.toggle('theme-light', theme === 'light');
    const isLight = theme === 'light';
    els.toggleTheme.setAttribute('aria-pressed', String(isLight));
    const label = els.toggleTheme.querySelector('.label');
    const icon = els.toggleTheme.querySelector('.icon');
    if (label) label.textContent = isLight ? 'Light' : 'Dark';
    if (icon) icon.textContent = isLight ? '🌞' : '🌜';
    els.toggleTheme.title = `Toggle Theme (current: ${theme})`;
  }

  function throttle(fn, wait) {
    let last = 0; let timeout;
    return function throttled() {
      const now = Date.now();
      const remaining = wait - (now - last);
      if (remaining <= 0) {
        last = now;
        fn();
      } else if (!timeout) {
        timeout = setTimeout(() => { last = Date.now(); timeout = null; fn(); }, remaining);
      }
    };
  }

  function updateTocActiveByScroll() {
    const headerNodes = els.doc.querySelectorAll('h2, h3');
    if (!headerNodes.length) return;
    const topOffset = 60; // approx topbar + small margin
    let activeId = headerNodes[0].id;
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    for (const h of headerNodes) {
      const rect = h.getBoundingClientRect();
      const y = rect.top + scrollY;
      if (y - topOffset <= scrollY) activeId = h.id; else break;
    }
    setActiveToc(activeId);
  }

  init();
})();


