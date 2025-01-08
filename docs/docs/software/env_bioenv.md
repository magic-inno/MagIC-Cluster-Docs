# env-bioenv

## Init

```sh
λ pixi init env-bioenv3.12
✔ Created /lustre/store/env/pixi/env-bioenv3.12/pixi.toml
```

## Add software

```sh
λ pixi add python=3.12 jupyter jupyterlab pandas numpy biopython
✔ Added python=3.12
✔ Added jupyter >=1.1.1,<2
✔ Added jupyterlab >=4.3.4,<5
✔ Added pandas >=2.2.3,<3
✔ Added numpy >=2.2.1,<3
✔ Added biopython >=1.84,<2
```

## Check installed

```sh
λ cat pixi.toml

[project]
channels = ["conda-forge", "bioconda"]
description = "Add a short description here"
name = "env-bioenv3.12"
platforms = ["linux-64"]
version = "0.1.0"

[tasks]

[dependencies]
python = "3.12.*"
jupyter = ">=1.1.1,<2"
jupyterlab = ">=4.3.4,<5"
pandas = ">=2.2.3,<3"
numpy = ">=2.2.1,<3"
biopython = ">=1.84,<2"
```

## Activate

```sh

λ cd /lustre/store/env/pixi/env-bioenv3.12/

λ pixi shell

λ which python

```

## Usage
