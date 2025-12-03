# KrakenFlow: The tutorial
<p align="center">
    <img class="brand" src="assets/Kraken_logo.png" alt="KrakenFlow logo" width="50%">
</p>

The tutorial is designed for researchers on focused metagenomics (WGS/shotgun) data analysis who are interested in developing or customizing taxonomic annotation pipelines.
It builds on the [Hello Nextflow](https://training.nextflow.io/latest/hello_nextflow/) and [Nextflow for RNAseq](https://training.nextflow.io/latest/nf4_science/rnaseq/) beginner training and demonstrates how to use Nextflow in the specific context of metagenomics data analysis.

Specifically, this tutorial demonstrates how to implement a simple read taxonomic annotation starting from removing host sequences, passing through re-estimating species abundance with Bayesian statistics, until generating complete reports.

To start, please go to the official website of the tutorial: [https://krakenflowtutorial.netlify.app/](https://krakenflowtutorial.netlify.app/)

## Learning objectives

By the end of this tutorial, you will have learnt how to apply foundational Nextflow concepts and tooling to a typical metagenomics use case.

Concretely, you will be able to:

- Write a linear workflow to perform host removal, taxonomic annotation and species abundance re-estimation
- Handle domain-specific files such as Kraken2 and Bracken reports resources appropriately
- Run analysis for a single sample or leverage on Nextflow's dataflow paradigm to parallelize multi-sample analysis
- Separate the processes and workflow in a more structured manner attempting to a first step in following [nf-core](https://nf-co.re/) guidelines
- Use conditionals and operators to control workflow execution
- Include custom scripts to be run within a given process

## Prerequisites

The tutorial assumes some minimal familiarity with the following:

- Tools and file formats commonly used in this scientific domain
- Experience with the command line
- Foundational Nextflow concepts and tooling covered in the [Hello Nextflow](https://training.nextflow.io/latest/hello_nextflow/) and [Nextflow for RNAseq](https://training.nextflow.io/latest/nf4_science/rnaseq/) beginner training.


