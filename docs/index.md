# TaxoFlow: The tutorial

<p align="center">
    <img src="assets/images/taxoflow_logo.png" alt="Workflow" width="20%">
</p>

This tutorial is designed for researchers on focused metagenomics (WGS/shotgun) data analysis who are interested in developing or customizing taxonomic annotation pipelines.
It builds on the [Hello Nextflow](https://training.nextflow.io/latest/hello_nextflow/) and [Nextflow for RNAseq](https://training.nextflow.io/latest/nf4_science/rnaseq/) beginner training and demonstrates how to use Nextflow in the specific context of metagenomics data analysis.

Specifically, this course demonstrates how to implement a simple read taxonomic annotation, starting from removing host sequences, passing through re-estimating species abundance with Bayesian statistics, until generating complete reports.

Let's get started! Click on the "Open in GitHub Codespaces" button below to launch the training environment (preferably in a separate tab), then read on while it loads.

!!! info "Environment options"
    This tutorial is fully packed to be used on GitHub Codespaces. If you want to use it locally, on an HPC cluster or using CodeSandbox, please check the section [Environment options](envsetup/index.md)

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
