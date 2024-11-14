# MagIC Cluster Documentation (WIP)

Welcome MagIC Cluster Documentation! If you want to know more depth about MagIC cluster
and learn how to use it, please refer to the website: http://10.132.2.151:8000

## Introduction

The MagIC High-Performance Computing (HPC) Cluster is a state-of-the-art computing
infrastructure designed to support advanced research and development activities. Equipped
with cutting-edge hardware and software, the MagIC HPC Cluster provides researchers with
the computational power needed to tackle complex scientific and engineering problems.

The cluster is built on a robust architecture that includes high-performance processors,
extensive memory, and fast storage systems. It is managed by the SLURM workload manager,
which ensures efficient resource allocation and job scheduling. The MagIC HPC Cluster
supports a wide range of applications, from large-scale simulations and data analysis to
machine learning and artificial intelligence.

With its powerful capabilities and flexible configuration, the MagIC HPC Cluster is an
invaluable resource for researchers and developers seeking to push the boundaries of
scientific discovery and technological innovation.

## Contributing

You are welcome to open a pull request for changes to the documentation. Follow below
guide, you can render site locally and see what changes will happen.

### Installation

```bash
# github
git clone https://github.com/magic-inno/MagIC-Cluster-Docs
# in-house
git clone http://10.132.2.151:3000/magic-academy/MagIC-Cluster-Docs.git
```

### Edit

#### NixOS

```bash
# Install nodejs and pnpm
$ nix develop --impure

# Install vitepress
$ cd MacIC-Cluster-Docs
$ pnpm add -D vitepress

# Update docs
# edit some markdown file
$ pnpm run docs:dev
```

#### Ubuntu

```bash
# Install nodejs and pnpm
$ sudo apt install nodejs pnpm yarn prettier git

# Install vitepress
$ cd MacIC-Cluster-Docs
$ pnpm add -D vitepress

# Update docs
# edit some markdown file
$ pnpm run docs:dev --port 8000
```

### Preview

```bash
$ firefox http://127.0.0.1:8000
```
