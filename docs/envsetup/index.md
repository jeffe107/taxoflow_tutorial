---
title: Environment options
description: Options for setting up your environment for TaxoFlow - The Tutorial
hide:
  - toc
  - footer
---

# Environment options

We aim to provide a consistent and thoroughly tested environment that allows learners to focus on learning Nextflow without having to spend time and effort on managing software.
To that end, we have developed a containerized environment that contains all the necessary software, code files and example data to work through all of our courses.

This containerized environment can be run out of the box on Github Codespaces or locally in VS Code with the Devcontainers extension.

<div class="grid cards" markdown>

-   :material-cloud-outline:{ .lg .middle } __Github Codespaces__

    ---

    GitHub Codespaces is a web-based service that allows us to provide a pre-built environment for training, with all tools and data included, backed by virtual machines in the cloud. It is accessible for free to anyone with a Github account.

    [Use Github Codespaces:material-arrow-right:](01_setup.md){ .md-button .md-button--primary .mt-1 }

-   :material-laptop:{ .lg .middle } __Local Devcontainers__

    ---

    VS Code with Devcontainers provides a locally-run containerized development environment with all training tools pre-configured. It offers the same pre-built environment as Codespaces but running entirely on your local hardware.

    [Use Devcontainers locally :material-arrow-right:](03_devcontainer.md){ .md-button .md-button--primary .mt-1 }

</div>

## Instructions for manual installation

If neither of the options above suit your needs, you can replicate this environment on your own local system by installing the software dependencies manually and cloning the training repository.

[Manual installation :material-arrow-right:](02_local.md){ .md-button .md-button--primary .mt-1 }

## CodeSandbox

As an alternative to GitHub Codespaces, you can use CodeSandbox. 

[Setup CodeSandbox :material-arrow-right:](04_sandbox.md){ .md-button .md-button--primary .mt-1 }

## HPC adaptation

If you wish to run the pipeline on an HPC cluster, you need to adapt the pipeline container engine and images. Please check 

[Setup CodeSandbox :material-arrow-right:](05_HPC.md){ .md-button .md-button--primary .mt-1 }

!!! bug "Paths in different environments"
    Please keep in mind that if you are using local/HPC/CodeSandbox implementations, you will need to change the paths to the files and directories (i.e Bowtie2 index) accordingly.

---