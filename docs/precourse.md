## Course goal

This is course is designed in two practical parts. In the first part (**Part 2 - single sample**), you will identify key components of the Nextflow dataflow paradigm using a validated pipeline whose purpose is to demonstrate how processes are connected. For the second part (**Part 3 - multi-sample**),  once you are able to establish how data is flowing, you'll _collect()_ the knowledge from Part 1 to extend the pipeline for multi-sample analysis.

By the end of the course, you will have constructed/understood a functional workflow implemented in **Nextflow DSL2**, using common features such as processes, channels, modules and configuration profiles. You will also have gained experience running the workflow in a controlled environment, and you will be equipped with the necessary information to execute the pipelines on a High Performance Computing (HPC) environment.

## Background knowledge

This workshop assumes learners to have a basic understanding of working with the command line on UNIX-based systems and a [GitHub Codespaces](https://github.com/features/codespaces) account.

### UNIX

You can test your UNIX skills with a quiz [here](https://docs.google.com/forms/d/e/1FAIpQLSd2BEWeOKLbIRGBT_aDEGPce1FOaVYBbhBiaqcaHoBKNB27MQ/viewform?usp=sf_link). If you don't have experience with UNIX command line, or if you are unsure whether you meet the prerequisites, please follow this [online UNIX tutorial](https://edu.sib.swiss/pluginfile.php/2878/mod_resource/content/4/couselab-html/content.html).

## Software

### OS 

This is an OS-agnostic course that requires from only to count with a laptop, a modern browser and a GitHub Codespaces account.

All the software needed in this workflow is either:

* Already installed in a GitHub Codespaces environment.
* Already available in Docker containers.
* Will be installed via containers during today's exercises.

All information of this course is based on the [official Nextflow documentation](https://docs.seqera.io/nextflow/) and uses **Nextflow DSL2** syntax.

!!! warning "Nextflow version"
    This tutorial uses a pinned version of Nextflow (**25.10.4**) with parser **v1**. This is important considering the rapid evolution of Nextflow, thus ensuring the proper execution of the pipeline.

### GitHub Codespaces - Code editor

GitHub Codespaces is one of its kind nowadays services as there are really only a few alternative options to replace in case of any problem. It provides a complete self-contained execution environment and connected to an IDE for free! However, the resources are limited on the free tier we will be using for this course. Good news is that it should be sufficient for the purpose of the course, and in normal conditions no one would (hopefully) run out the resources allocated by Codespaces on the free tier.

You can start here:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jeffe107/taxoflow_tutorial?quickstart=1)

This link will open VS code on your browser, and hence it is expected that you are familiar with the layout and basic functionalities VS code has. Otherwise, please check this quick [tutorial](https://code.visualstudio.com/docs/getstarted/getting-started) before the course to understand where everything is.

!!! tip "Setting GitHub Codespaces"
    More information about setting Codespaces on the [Environment setup section](envsetup/01_setup.md).

#### VS code video tutorial

You can find a video tutorial to learn about VS code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1ZfO149BJvg" title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen><a href="https://www.ivatech.dev" style="display:none;">website development</a></iframe>

### Alternative installations

You can install and execute the pipeline of this tutorial locally using your local VS Code; please follow the [Local Devcontainers setup](envsetup/03_devcontainer.md). If you wish to use an HPC cluster, you will find specific instructions on the [HPC installation setup](envsetup/05_HPC.md). On the other hand, an alternative online computing environment is available through [CodeSandbox](envsetup/04_sandbox.md).

### Pipeline-specific tools

The specific versions of the software used by TaxoFlow are detailed [here](course_material/01_pipeline.md/#1-workflow-design)

## Website colour code explanation

We tried to use a colour code throughout the website to make the different pieces of information easily distinguishable. Here's a quick summary about the colour blocks you will encounter:

!!! info "This is a supplementary piece of information"

!!! tip "This is a tip to help you advance with the course"

!!! success "This is the output on the console"

!!! warning "This is a warning about a potential problem"

!!! abstract "These are directory contents"

!!! bug "This is an explanation about a common bug/error"