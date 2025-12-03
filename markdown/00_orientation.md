# Orientation

The training environment contains all the software, code and data necessary to work through this training course, so you don't need to install anything yourself.
However, you do need a (free) account to log in, and you should take a few minutes to familiarize yourself with the interface.

If you have not yet done so, please follow the [Environment Setup](https://training.nextflow.io/latest/envsetup/) mini-course before going any further.

## Materials provided

For the purpose of the course, we'll be working in the `nf4-science/` directory, where you will find all the code files, test data and accessory files you will need.
To move into it, run the following command:

```bash
cd nf4-science
git clone https://github.com/jeffe107/KrakenFlow
cd KrakenFlow
```

Before we go any further, we are going to download some files that are too large to be permanently stored within the GitHub repository.
Specifically, this is a set of files that constitute the database required by Kraken2 and Bracken.

Run the following commands in that exact order and wait until all of them are finished:

```bash
mkdir -p data/krakendb && cd "$_"
wget --no-check-certificate --no-proxy 'https://zenodo.org/api/records/17708950/files/krakendb.tar.gz/content'
tar -xvzf content
rm -r content
cd -
```

Briefly, this creates a directory called `krakendb` under `data/` and moves into it.
Then, it downloads an archive file with `wget`, unpacks its contents with `tar`, and deletes the original archive file.
Finally, it moves you back up to the original `nf4-science/KrakenFlow/` directory.

Now, we need to retrieve the indexed genome to remove host reads. We are going to use the _Arabidopsis thaliana_ genome assembly TAIR10 that has been already indexed. There more available indexed genomes [here](https://benlangmead.github.io/aws-indexes/bowtie) or you can build [your own index](https://www.metagenomics.wiki/tools/bowtie2/index). Run the following commands then:

```bash
mkdir -p data/genome && cd "$_"
wget --no-check-certificate --no-proxy 'https://genome-idx.s3.amazonaws.com/bt/TAIR10.zip'
unzip TAIR10.zip
rm -r TAIR10.zip
cd -
```

This code block follows the same procedure as for downloading the Kraken2 database.

Now, let's take a look of the files contained in this directory with the `tree` command:

```bash
tree . -L 3
```

Here you should see the following directory structure:

```console title="Directory contents"
.
├── assets
│   ├── logo_krakenflow.png
│   └── workflow_krakenflow.png
├── bin
│   └── report.Rmd
├── data
│   ├── genome
│   │   └── TAIR10
│   ├── krakendb
│   │   ├── database250mers.kmer_distrib
│   │   ├── database250mers.kraken
│   │   ├── database.kraken
│   │   ├── hash.k2d
│   │   ├── names.dmp
│   │   ├── nodes.dmp
│   │   ├── opts.k2d
│   │   ├── seqid2taxid.map
│   │   └── taxo.k2d
│   ├── samples
│   │   ├── ERR2143768
│   │   ├── ERR2143770
│   │   └── ERR2143774
│   └── samplesheet.csv
├── LICENSE
├── main.nf
├── modules
│   ├── bowtie2.nf
│   ├── bracken.nf
│   ├── knit_phyloseq.nf
│   ├── kraken2.nf
│   ├── kraken_biom.nf
│   ├── kReport2Krona.nf
│   └── ktImportText.nf
├── nextflow.config
├── README.md
└── workflow.nf
```

**This a summarized description of the files and directories found:**

- **`main.nf`** is the file we are going to invoke with the world-famous `nextflow run` command.
- **`workflow.nf`** is where all the magic happens, it stores the order of execution of tasks and how data should be handled.
- **`nextflow.config`**: you should know what this file does right? JK, with it we can manage different directives for workflow execution.
- **`modules`** is a really important folder since here we find dedicated files per each process of the pipeline.
- **`bin`** is the directory where we store customized scripts that can be run within a given process.
- **`data`** contains input data and related resources:
  - An indexed genome within the `genome` folder representing the host genome to which we want to map the reads for contamination removal.
  - *krakendb* is a directory that contains the Kraken2 database necessary for both taxonomic annotation and species abundance re-estimation.
  - *samplesheet.csv* lists the IDs and paths of the example data files, for processing in batches.
  - *samples* directory is where the raw sequences are stored.
    The names correspond to accession numbers that you can search on the [Sequence Read Archive](https://www.ncbi.nlm.nih.gov/sra)

!!!note

    Don't panic if this feels like a lot.
    This is just a glimpse of the material, and we are going to dig into each necessary file for the analysis in due time.

Now, to begin the course, click on the arrow in the bottom right corner of this page.
