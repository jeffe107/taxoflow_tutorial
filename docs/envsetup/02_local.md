# Manual installation

It is possible to install everything you need to run the training in your own local environment manually.

Here we've documented how to do that on standard POSIX-compatible systems (assuming a personal machine such as a laptop).
Keep in mind that some details may be different depending on your specific system.

!!! tip

    Before you proceed, have you considered using the [Devcontainers approach](03_devcontainer.md)?
    It provides all the necessary tools and dependencies without requiring manual installation.

## General software requirements

Nextflow can be used on any POSIX-compatible system (Linux, macOS, Windows Subsystem for Linux, etc.) with Java installed.
Our training courses have a few additional requirements.

In total, you will need to have the following software installed:

- Bash or equivalent shell
- [Java 21 or later](https://www.oracle.com/technetwork/java/javase/downloads/index.html) (Java 17+ is sufficient for running Nextflow.
- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Conda](https://conda.io/) 4.5 (or later)
- [VSCode](https://code.visualstudio.com) with the [Nextflow extension](https://www.nextflow.io/docs/latest/developer-env.html#devenv-nextflow)

The VSCode application is technically optional but we strongly recommend that you use it for working through the courses as well as for your Nextflow development work in general.

The Nextflow documentation manual provides instructions for installing these dependencies under [Environment setup](https://www.nextflow.io/docs/latest/developer-env.html).

## Nextflow and nf-core tools

You will need to install Nextflow itself, plus the nf-core tools, as detailed in the articles linked below:

- [Nextflow installation](https://www.nextflow.io/docs/latest/install.html)
- [nf-core tools](https://nf-co.re/docs/nf-core-tools/installation)

We recommend using the self-install option for Nextflow and the PyPI option for nf-core tools.

Please remember an important clarification about the Nextflow version:

!!! warning "Nextflow version"
    This tutorial uses a pinned version of Nextflow (**25.10.4**) with parser **v1**. This is important considering the rapid evolution of Nextflow, thus ensuring the proper execution of the pipeline.

Thus, to pin the Nextflow version:

```bash
export NXF_VER=25.10.4
```

## Training materials

The easiest way to download the training materials is to clone the entire repository using this command:

```bash
git clone https://github.com/jeffe107/taxoflow_tutorial.git
```

You can then follow the course instructions provided on the website.