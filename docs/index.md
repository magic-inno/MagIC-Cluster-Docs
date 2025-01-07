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
      text: What is MagIC Cluster?
      link: /docs/guide/what-is-magic-cluster
    - theme: alt
      text: Quickstart
      link: /docs/guide/getting-started

features:
  - icon: 🚀
    title: High performance
    details: SLURM systemd and Lustre storage
  - icon: ⌛
    title: Reproducible
    details: Run your bioinformatics pipeline on a reproducible computing environment
  - icon: 🐍
    title: Automatically
    details:
      Run your bioinformatics piepliue using workflow engith which help you to manager
      jobs
  - icon: 📝
    title: Interactively
    details:
      Perform interactive data analysis on remote server using Rstudio server or
      Jupyterlab
---
