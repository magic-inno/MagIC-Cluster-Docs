# What is MagIC-Cluster?

**MagIC-Cluster** is a computational cluster environment designed for executing
large-scale [bioinformatics](https://en.wikipedia.org/wiki/Bioinformatics) workflows. It
consists of multiple high-performance computers, each running the
[AlmaLinux](https://almalinux.org/) operating system. These computers and storage devices
are interconnected via a 100G high-speed network.

When a task program requests computational resources, the
[Slurm](https://slurm.schedmd.com/documentation.html) job scheduling system automatically
allocates these resources. Storage is managed by the [Lustre](https://www.lustre.org/)
distributed file system, which handles read and write operations efficiently.

With the **Slurm + Lustre** architecture, we can quickly request and utilize computational
resources, enabling faster data processing and analysis. This accelerates scientific
research and discovery.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](./getting_started).

</div>

## Use Cases

- **Data Preprocess** Metagenomics data preprocessing is a critical step in the analysis
  of metagenomic sequencing data. It involves several steps to ensure that the raw
  sequencing data is cleaned, filtered, and prepared for downstream analysis. Here are the
  key steps typically involved in metagenomics data preprocessing:

  - Quality Control:

    - Raw Data Inspection: Assess the quality of the raw sequencing reads using tools like
      FastQC.
    - Adapter Trimming: Remove sequencing adapters and low-quality bases from the reads
      using tools like Trimmomatic or Cutadapt.
    - Quality Filtering: Filter out low-quality reads and bases to improve the overall
      quality of the data.

  - Host Contamination Removal: Remove reads that map to the host genome (e.g., human
    genome in human microbiome studies) using tools like Bowtie2 or BWA. This step ensures
    that only microbial reads are retained for analysis.

- **Taxonomic Profiling** Metagenomics taxonomic profiling is the process of identifying
  and quantifying the microbial species present in a metagenomic sample. This involves
  analyzing the sequencing data to determine the taxonomic composition of the microbial
  community, providing insights into the diversity and abundance of different
  microorganisms. Here are the key steps and concepts involved in metagenomics taxonomic
  profiling:

  - Taxonomic Assignment: Assign taxonomic labels to the reads or contigs based on the
    reference database. This step involves matching the sequences to known microbial
    genomes or marker genes. Tools like QIIME, Kraken2 can be used for taxonomic
    assignment and visualization.

  - Abundance Estimation: Quantify the abundance of each taxon in the sample. This can be
    done by counting the number of reads assigned to each taxon and normalizing by the
    total number of reads. Tools like MetaPhlAn and Bracken provide relative abundance
    estimates for each taxon.

- **Assembly and Binning**

  - Assembly: Metagenomics assembly involves piecing together short sequencing reads to
    form longer contiguous sequences (contigs) that represent parts of the genomes present
    in the sample. This step is essential for understanding the genetic makeup of the
    microbial community.

  - Binning: Metagenomics binning is the process of grouping assembled contigs into bins
    that represent individual genomes or closely related genomes. This step helps in
    separating the genetic material of different microorganisms within the sample.
