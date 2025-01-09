# Jupyter

 <div style="display: flex; justify-content: space-between;">
  <img src="../../static/software_jupyter.svg" alt="jupyter_logo" style="width: 30%;">
  <img src="../../static/software_jupyter.webp" alt="jupyter_lab" style="width: 70%;">
</div>

## Introduction

Jupyter Notebook is an open-source web application that allows you to create and share
documents that contain live code, equations, visualizations, and narrative text. It is
widely used in data science, scientific research, and education.

## Installation

```sh
λ pip install notebook jupyter jupyterlab

# or
λ mamba install notebook jupyter jupyterlab

# or
λ pixi init env-jupyter
λ cd env-jupyter
λ pixi add notebook jupyter jupyterlab
```

## Configuration

### Generating the Configuration File

If you haven't already generated a Jupyter configuration file, you can do so by running:

```sh
λ jupyter notebook --generate-config
```

This command will create a configuration file at ~/.jupyter/jupyter_notebook_config.py.
Setting the Port

- To set a specific port for Jupyter Notebook, open the configuration file in a text
  editor:

```sh
λ ~/.jupyter/jupyter_notebook_config.py
```

Find the line that sets the port (it will be commented out by default). Uncomment it and
set your desired port:

```python
c.NotebookApp.port = 8888  # Replace 8888 with your desired port
```

- Disabling Browser Opening

To prevent Jupyter Notebook from automatically opening a browser window, find the line
that controls this behavior and set it to False:

```python
c.NotebookApp.open_browser = False
```

- Setting a Static Password

To set a static password for Jupyter Notebook, you need to generate a hashed password. You
can do this using the IPython shell:

```sh
λ jupyter notebook password
Enter password: ********
Verify password: ********
[JupyterPasswordApp] Wrote hashed password to /home/username/.jupyter/jupyter_server_config.json
```

Replace 'your_password' with your desired password. This command will output a hashed
password. Copy the hashed password and add it to the configuration file:

```python
c.NotebookApp.password = 'sha1:your_hashed_password'  # Replace with the hashed password
```

### Example Configuration

Here is an example of what the relevant parts of your jupyter_notebook_config.py file
might look like:

```python
c.NotebookApp.port = 8888
c.NotebookApp.open_browser = False
c.NotebookApp.password = 'sha1:your_hashed_password'
```

## Running Jupyter Notebook

```sh
λ jupyter notebook

# or
λ jupyter lab
```

## Connect it

Access Jupyter Notebook: Open a web browser and go to http://<remote_server_ip>:8888. You
should see the Jupyter Notebook login page.

## SSH Forwarding for Jupyter Notebook (Optional)

If you can't connect remote_server directly by 8888 port, you may need to do SSH
forwarding.

```sh
λ ssh -L 8888:localhost:8888 username@remote_server_ip
```

Access Jupyter Notebook: Open a web browser and go to http://localhost:8888. You should
see the Jupyter Notebook login page.

## Reference

- [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/5.7.4/index.html#)
