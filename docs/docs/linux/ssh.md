# ssh

## Introduction to SSH

[SSH (Secure Shell)](https://en.wikipedia.org/wiki/Secure_Shell) is a network protocol
that provides secure access to remote systems over an unsecured network. It uses
encryption to ensure that all data transmitted between the client and the server remains
confidential and secure. SSH is commonly used for remote login, file transfers, and secure
tunneling.

### Password Login

Password login is the simplest method to connect to a remote server using SSH. Here are
the steps to log in using a password:

- Open a Terminal: On your local machine, open a terminal window.
- SSH Command: Use the following command to connect to the remote server:

```sh
ssh username@remote_host
```

Replace username with your username on the remote server and remote_host with the server's
IP address or hostname. Enter Password: When prompted, enter the password for the remote
user account.

Example:

```sh
ssh user@10.132.2.147
```

### Key Generation

Generating SSH keys is a more secure method for logging into remote servers. Here’s how to
generate SSH keys:

- Open a Terminal: On your local machine, open a terminal window.
- Generate Key Pair: Use the following command to generate a new SSH key pair:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

::: tip

- -t rsa: Specifies the type of key to create, in this case, RSA.
- -b 4096: Specifies the number of bits in the key, in this case, 4096 bits.
- -C "your_email@example.com": Adds a label to the key, usually your email address.

:::

Save the Key: When prompted, press Enter to save the key in the default location
(~/.ssh/id_rsa). You can also specify a different file path if needed.

- Set a Passphrase: Optionally, you can set a passphrase for added security.

### Key Copy

After generating the SSH key pair, you need to copy the public key to the remote server.
Here’s how to do it:

- Copy the Public Key: Use the ssh-copy-id command to copy the public key to the remote
  server:

```sh
ssh-copy-id username@remote_host
```

Replace username with your username on the remote server and remote_host with the server's
IP address or hostname. Enter Password: When prompted, enter the password for the remote
user account.

Alternatively, you can manually copy the public key:

- Display the Public Key:

```sh
cat ~/.ssh/id_rsa.pub
```

- Copy the Output: Copy the output of the command. SSH into the Remote Server:

```sh
ssh username@remote_host
```

- Append the Public Key:

```sh
echo "your_public_key" >> ~/.ssh/authorized_keys
```

Replace your_public_key with the content you copied earlier.

### Public Key Login

Once the public key is copied to the remote server, you can log in using the SSH key:

- Open a Terminal: On your local machine, open a terminal window.
- SSH Command: Use the following command to connect to the remote server:

```sh
ssh username@remote_host
```

If you set a passphrase during key generation, you will be prompted to enter it.

### SSH Forwarding

SSH forwarding allows you to securely tunnel network traffic through an SSH connection.
This is useful for accessing services running on a remote server, such as RStudio Server
and Jupyter.

#### SSH Forwarding for RStudio Server

- Open a Terminal: On your local machine, open a terminal window. SSH Command with Port
- Forwarding: Use the following command to forward a local port to the remote RStudio
  Server:

```sh
ssh -L 8787:localhost:8787 username@remote_host
```

::: tip

- -L 8787:localhost:8787: Forwards local port 8787 to port 8787 on the remote server.
  Rstudio server use 8787 as default port. :::

- Access RStudio Server: Open a web browser and go to http://localhost:8787. You should
  see the RStudio Server login page.

#### SSH Forwarding for Jupyter

- Open a Terminal: On your local machine, open a terminal window. SSH Command with Port
- Forwarding: Use the following command to forward a local port to the remote Jupyter
  server:

```sh
sh -L 8888:localhost:8888 username@remote_host
```

::: tip

- -L 8888:localhost:8888: Forwards local port 8888 to port 8888 on the remote server.
  Jupyter server use 8888 as default port. :::

- Access Jupyter: Open a web browser and go to http://localhost:8888. You should see the
  Jupyter login page.

### Writing an SSH Config File

An SSH config file allows you to simplify and streamline your SSH connections by defining
aliases and default settings. Here’s how to write an SSH config file:

- Open or Create the Config File: Open or create the ~/.ssh/config file on your local
  machine.

- Add Configuration Entries: Add configuration entries for your SSH connections. Here is
  an example configuration:

```sh
Host headnode1
    HostName 10.132.2.147
    User username
    Port 22
    IdentityFile ~/.ssh/id_rsa_headnode1
```

- Save the Config File: Save the ~/.ssh/config file.

- Use the Config File: You can now use the aliases defined in the config file to connect
  to your remote servers. For example:

```sh
ssh headnode1
```

### Autossh Forwarding

Autossh is a tool that automatically restarts SSH sessions and tunnels. It is useful for
maintaining persistent SSH connections, especially for port forwarding. Here’s how to use
autossh for forwarding:

- Basic Usage: Use autossh to maintain an SSH tunnel. For example, to forward a local port
  to a remote RStudio Server:

```sh
autossh -M 0 -N -L 8787:localhost:8787 username@remote_host
```

::: tip

- -M 0: Disables the monitoring port.
- -N: Do not execute a remote command.
- -L 8787:localhost:8787: Forwards local port 8787 to port 8787 on the remote server. :::

- Advanced Usage with Monitoring Port: To use a monitoring port for better reliability:

```sh
autossh -M 20000 -N -L 8787:localhost:8787 username@remote_host
```

::: tip

- -M 20000: Specifies the monitoring port (20000 in this case). :::

Using Autossh with SSH Config: You can also use autossh with your SSH config file. For
example:

```sh
autossh -M 0 headnode1
```

This command uses the headnoe1 alias defined in your ~/.ssh/config file.

This documentation covers the basics of SSH usage, including password login, key
generation, key copy, public key login, SSH forwarding for RStudio Server and Jupyter, how
to write an SSH config file, and autossh forwarding. For more advanced usage and
configurations, refer to the official SSH documentation or consult your system
administrator.

## Reference

- [什么是SSH?](https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html)
- [SSH教程](https://wangdoc.com/ssh/basic)
