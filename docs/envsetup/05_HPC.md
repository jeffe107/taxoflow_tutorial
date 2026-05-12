
<p style='text-align: justify;'>If you are aiming at installing and executing TaxoFlow on an HPC cluster, you must be aware that probably you can't rely on Docker as it requires _root_ privileges. Fortunately, Nextflow can easily handle this for you by just changing the container images and enabling Apptainer/Singularity in the config files. For instance:</p>

- On a given process, this would be the Singularity/Apptainer container created using Seqera Containers for an AMD64 architecture to execute the Bracken process:

```groovy title="bracken.nf" linenums="1"
process BRACKEN {
    ...
	container "community.wave.seqera.io/library/bracken:3.1--77382b4340548c89"
    ...
```

!!! warning "Specific architecture"
    Considering that the architecture of the HPC can change, we can't provide images for all infrastuctures. However, by using the above-mentioned tutorial and the software versions provided on [Part 1 - Pipeline](../course_material/01_pipeline.md), you can build the images for each process using [Seqera Containers](https://seqera.io/containers/)

- And, on the config file, enable using Apptainer/Singularity as the container engine to run the pipeline:

```groovy title="nextflow.config" linenums="17"
apptainer.enabled = true
singularity.enabled = true
```

!!! warning "Mounting directories"
    It is important to keep in mind that using Singularity/Apptainer requires a bit of extra-work in terms of configuration to use files/directories. It is highly recommended to check the Nextflow official [documentation](https://docs.seqera.io/nextflow/container#apptainer) in this regard before executing the pipeline.

During the pipeline development, you will notice that the Docker/Wave images are provided for each process using [Seqera Containers](https://seqera.io/containers/), a platform where you just need to change the desired container engine and the computing architecture. 

Please check this video to learn how to create your own Apptainer/Singularity images that you will place inside each process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xqr--bKEN9U?si=ZgjrmfY5AXDTFjq_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>