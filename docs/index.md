---
title: Home
description: Welcome to TaxoFlow.
hide:
  - toc
  - footer
---

# TaxoFlow: The tutorial

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } __Learn at your pace__

    ---

    **Welcome to TaxoFlow!**

    You will find here a carefully designed step-by-step tutorial to learn how to wrap a metagenomics pipeline using Nextflow. You will find also plenty of resources to expand your skills.

    <p align="center">
    <img src="assets/images/taxoflow_logo.png" alt="Workflow" width="30%">
    </p>

    ??? courses "Paper and citation"

        TaxoFlow is accompanied by a short paper where the learning goals, structure and scope are discussed. Please consider citing it if you find Taxoflow useful:

        - Yepes-García,  J.; Falquet,  L. TaxoFlow: The Tutorial. An Educational Nextflow Pipeline for Metagenomics Taxonomic Profiling. Preprints 2025, 2025121989. [https://doi.org/10.20944/preprints202512.1989.v1](https://doi.org/10.20944/preprints202512.1989.v1)

-   :material-information-outline:{ .lg .middle } __Additional information__

    ---

    ??? warning "Version compatibility"

        This tutorial uses a pinned version of Nextflow (**24.10.6**) with parser **v1**. This is important considering the rapid evolution of Nextflow, thus ensuring the proper execution of the pipeline.

    ??? terminal "Environment options"

        We provide a web-based training environment where everything you need to take the training is preinstalled, available through Github Codespaces (requires a free GitHub account).

        [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jeffe107/taxoflow_tutorial?quickstart=1&ref=master)

        If this does not suit your needs, please see the other [Environment options](envsetup/index.md).

    ??? learning "Complementary training"

        TaxoFlow is part of the streamed course [**Nextflow in Action Build Smarter, Faster, Reproducible Pipelines**](https://sib-swiss.github.io/nextflow-training/), managed by the Swiss Institute of Bioinformatics (SIB).

        - The next version of this course is scheduled on Nov. 18th-19th, 2026. More information [here](https://www.sib.swiss/training/course/20261118_NEXAC).

    ??? people "Developers"

        - [Jeferyd Yepes-García](https://jeferydyepes.com/) [:custom-orcid:](https://orcid.org/0000-0002-3278-3332) [:simple-nextflow:](https://www.nextflow.io/our_ambassadors.html) [:simple-github:](https://github.com/jeffe107)

        - [Laurent Falquet](https://www.unifr.ch/bio/en/groups/falquet/) [:custom-orcid:](https://orcid.org/0000-0001-8102-7579)

    ??? licensing "Open-source license and contribution policy"

        [![Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](assets/images/cc_by-nc-sa.svg){ align=right }](https://creativecommons.org/licenses/by-nc-sa/4.0/)

        This training material is developed and maintained by [BUGFri](https://www.unifr.ch/bio/en/groups/falquet/) and released under an open-source license ([CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)) for the benefit of the community.

        We welcome improvements, fixes and bug reports from the community. Please refer to [GitHub issue section](https://github.com/jeffe107/taxoflow_tutorial/issues), where you can report issues or propose changes to the training source material. See the `README.md` in the repository for more details.

    ??? catalog "Credit to Nextflow training team"

        TaxoFlow is inspired by the training material developed by the Nextflow training team, and important sections as the [Environment options tutorial](https://training.nextflow.io/latest/envsetup/) are explictly taken from their repository. We hereby express our gratitude to them, particularly to Geraldine Van der Auwera for their valuable contribution to conceive the idea of the tutorial and for her insightful feedback to implement it.

</div>

This tutorial is designed for researchers on focused metagenomics (WGS/shotgun) data analysis who are interested in developing or customizing taxonomic annotation pipelines.
It builds on the [Hello Nextflow](https://training.nextflow.io/latest/hello_nextflow/) and [Nextflow for RNAseq](https://training.nextflow.io/latest/nf4_science/rnaseq/) beginner training and demonstrates how to use Nextflow in the specific context of metagenomics data analysis.

Specifically, this course demonstrates how to implement a simple read taxonomic annotation, starting from removing host sequences, passing through re-estimating species abundance with Bayesian statistics, until generating complete reports.

Let's get started! Click on the "Open in GitHub Codespaces" button below to launch the training environment (preferably in a separate tab), then read on while it loads.

!!! info "Environment options"
    This tutorial is fully packed to be used on GitHub Codespaces. If you want to use it locally, on an HPC cluster or through CodeSandbox, please check the section [Environment options](envsetup/index.md).

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jeffe107/taxoflow_tutorial?quickstart=1)

## Learning objectives

By the end of this course, you will have learnt how to apply foundational Nextflow concepts and tooling to a typical metagenomics use case.

Concretely, you will be able to:

- Write a linear workflow to perform host removal, taxonomic annotation and species abundance re-estimation.
- Handle domain-specific files such as Kraken2 and Bracken reports resources appropriately
- Run analysis for a single sample or leverage on Nextflow's dataflow paradigm to parallelize multi-sample analysis.
- Separate the processes and workflow in a more structured manner attempting to a first step in following [nf-core](https://nf-co.re/) guidelines in terms of reproducibility, portability, modularity, scalibility and traceability.
- Use conditionals and operators to control workflow execution.
- Include custom scripts to be run within a given process.

## Prerequisites

The course assumes some minimal familiarity with the following:

- Tools and file formats commonly used in this scientific domain. We recommend this Metagenomics data analysis [tutorial](https://carpentries-lab.github.io/metagenomics-analysis/06-taxonomic/index.html) to get acquainted with taxonomic classification of unassembled reads.
- Experience with the command line. We recommend this [online UNIX tutorial](https://edu.sib.swiss/pluginfile.php/2878/mod_resource/content/4/couselab-html/content.html).
- Foundational Nextflow concepts and tooling covered in the [Hello Nextflow](https://training.nextflow.io/latest/hello_nextflow/) and [Nextflow for RNAseq](https://training.nextflow.io/latest/nf4_science/rnaseq/) beginner training. We also recommend the SIB course [Nextflow in Action Build Smarter, Faster, Reproducible Pipelines](https://sib-swiss.github.io/nextflow-training/)
- Familiarity with VS code. We recommend this [tutorial](https://code.visualstudio.com/docs/getstarted/getting-started) to get started.

More information about prerequisites and precourse arrangements can be found [here](precourse.md)

For technical requirements and environment setup, see the [Environment Setup](envsetup/index.md) directions.
