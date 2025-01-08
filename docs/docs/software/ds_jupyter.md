# Jupyter

 <div style="display: flex; justify-content: space-between;">
  <img src="./jupyter.svg" alt="jupyter_logo" style="width: 30%;">
  <img src="./jupyter.webp" alt="jupyter_lab" style="width: 70%;">
</div>

## Introduction

Jupyter Notebook is an open-source web application that allows you to create and share
documents that contain live code, equations, visualizations, and narrative text. It is
widely used in data science, scientific research, and education.

## Installation

```sh
pip install notebook jupyter jupyterlab

# or
mamba install notebook jupyter jupyterlab

# or
pixi init env-jupyter
cd env-jupyter
pixi add notebook jupyter jupyterlab
```

## Configuration

### Generating the Configuration File

If you haven't already generated a Jupyter configuration file, you can do so by running:

```sh
jupyter notebook --generate-config
```

This command will create a configuration file at ~/.jupyter/jupyter_notebook_config.py.
Setting the Port

- To set a specific port for Jupyter Notebook, open the configuration file in a text
  editor:

```sh
vim ~/.jupyter/jupyter_notebook_config.py
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
python -c "from notebook.auth import passwd; print(passwd('your_password'))"
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
jupyter notebook

# or
jupyter lab
```

## Connect it

Access Jupyter Notebook: Open a web browser and go to http://<remote_server_ip>:8888. You
should see the Jupyter Notebook login page.

## SSH Forwarding for Jupyter Notebook (Optional)

If you can't connect remote_server directly by 8888 port, you may need to do SSH
forwarding.

```sh
ssh -L 8888:localhost:8888 username@remote_server_ip
```

Access Jupyter Notebook: Open a web browser and go to http://localhost:8888. You should
see the Jupyter Notebook login page.

## Reference

- [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/5.7.4/index.html#)
