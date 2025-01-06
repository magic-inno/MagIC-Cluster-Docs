---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MagIC Cluster Docs"
  text: "To play ground with MagIC Cluster"
  tagline:
    Our aim is to empower the microbiome into cutting-edge innovations that will transform
    the lives of patients and their families.
  image:
    src: /magic_logo.png
    alt: MagIC-Cluster-Docs
  actions:
    - theme: brand
      text: Linux
      link: /docs/linux
    - theme: brand
      text: Slurm
      link: /docs/slurm
    - theme: alt
      text: Database
      link: /docs/database
    - theme: alt
      text: Pipeline
      link: /docs/pipeline
    - theme: alt
      text: Software
      link: /docs/software
    - theme: alt
      text: Hardware
      link: /docs/hardware
    - theme: alt
      text: Service
      link: /docs/service

features:
  - title: High performance
    details: SLURM systemd and Lustre storage
  - title: Reproducible
    details: Run your bioinformatics pipeline on a reproducible computing environment
  - title: Automatically
    details:
      Run your bioinformatics piepliue using workflow engith which help you to manager
      jobs
  - title: Interactively
    details:
      Perform interactive data analysis on remote server using Rstudio server or
      Jupyterlab
---
