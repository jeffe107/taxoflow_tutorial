## Background knowledge

This workshop assumes learners to have a basic understanding of working with the command line on UNIX-based systems and a [GitHub Codespaces](https://github.com/features/codespaces) account.

### UNIX

You can test your UNIX skills with a quiz [here](https://docs.google.com/forms/d/e/1FAIpQLSd2BEWeOKLbIRGBT_aDEGPce1FOaVYBbhBiaqcaHoBKNB27MQ/viewform?usp=sf_link). If you don't have experience with UNIX command line, or if you are unsure whether you meet the prerequisites, please follow this [online UNIX tutorial](https://edu.sib.swiss/pluginfile.php/2878/mod_resource/content/4/couselab-html/content.html).

## Software

### OS 

This is an OS-agnostic course that requires from only to count with a laptop, a modern browser and a GitHub Codespaces account.

### Code editor

You will be provided with a link to create the workspace in GitHub Codespaces automatically. This link will open VS code on your browser, and hence it is expected that you are familiar with the layout and basic functionalities VS code has. Otherwise, please check this quick [tutorial](https://code.visualstudio.com/docs/getstarted/getting-started) before the course to understand where everything is. Either way, there will be a short introduction to VS code at the beginning of the online session.

This is the link to GitHub Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jeffe107/taxoflow_tutorial?quickstart=1)

#### Video tutorial

You can find a (cool) video tutorial to learn about Visual Studio Code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1ZfO149BJvg" title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen><a href="https://www.ivatech.dev" style="display:none;">website development</a></iframe>

### Back-up plan

If you exceed the Codespace resources, we have prepared a solution using [CodeSandbox](https://codesandbox.io/). These are the steps to follow:

1. Go to the website: [CodeSandbox](https://codesandbox.io/).
2. Sign in using your GitHub or your Google Account (top right corner).
3. Once signed-in, click on `+ Create` (top right corner).
4. Select `Docker CodeSanbox`.
5. On the `Configure window` leave everything as default and click on Create Devbox.
6. Wait until the microVM is created.
7. Now it looks like VS code. Create a new terminal then.
8. Run the following commands on the terminal:

```bash
curl -s https://get.sdkman.io | bash
source "/root/.sdkman/bin/sdkman-init.sh"
sdk install java 17.0.10-tem
curl -s https://get.nextflow.io | bash
chmod +x nextflow
export PATH=${PATH}:/project/workspace
git clone https://github.com/jeffe107/taxoflow_tutorial
cd taxoflow_tutorial
```

9. Now you should be into the repository folder, just like on GitHub Codespaces.