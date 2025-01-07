# Shell Scripting

Shell scripting is an essential skill for anyone working with Linux. It allows you to
automate tasks, manage system configurations, and streamline workflows. This document
provides a comprehensive guide to Linux shell scripting, with a detailed focus on the Bash
shell.

## Introduction to Bash

Bash (Bourne Again SHell) is the most widely used shell in Linux. It is a command
processor that typically runs in a text window, allowing users to execute commands by
typing them in. Bash is known for its robustness, flexibility, and extensive feature set.

## Basic Usage of Bash

- Opening a Terminal

On most Linux distributions, you can open a terminal by searching for "Terminal" in the
application menu or by pressing Ctrl + Alt + T.

- Running Commands

You can run commands by simply typing them and pressing Enter. For example:

```sh
ls
```

This command lists the files and directories in the current directory.

### Writing a Bash Script

A Bash script is a plain text file containing a series of commands. To create a script,
use a text editor like nano or vim.

Example script (hello.sh):

```sh
#!/bin/bash
echo "Hello, World!"
```

To make the script executable:

```sh
chmod +x hello.sh
```

To run the script:

```sh
./hello.sh
```

### Variables

Variables in Bash are used to store data. You can define a variable using the following
syntax:

```
name="Alice"
echo "Hello, $name!"
```

### Control Structures

- If-Else Statements:

```sh
if [ condition ]; then
    # commands
else
    # commands
fi
```

- Loops:

  - For Loop:

```sh
for i in {1..5}; do
    echo "Number: $i"
done
```

- While Loop:

```sh
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done
```

### Functions

Functions in Bash allow you to encapsulate a block of code that can be reused.

```sh
greet() {
    echo "Hello, $1!"
}
greet "Bob"
```

### Input and Output

- Reading Input:

```sh
read -p "Enter your name: " name
echo "Hello, $name!"
```

- Redirecting Output:

```sh
echo "Hello, World!" > output.txt
```

### File Operations

- Creating a File:

```sh
touch newfile.txt
```

- Deleting a File:

```sh
rm newfile.txt
```

- Reading a File:

```sh
cat filename.txt
```

- Writing to a File:

```sh
echo "This is a new line" >> filename.txt
```

### Working with Arrays

Bash supports arrays, which can be useful for storing multiple values.

```sh
fruits=("apple" "banana" "cherry")
echo "First fruit: ${fruits[0]}"
```

### Conditional Expressions

Bash provides various conditional expressions for comparing values.

```sh
if [ "$a" -eq "$b" ]; then
    echo "a is equal to b"
fi
```

### String Manipulation

Bash offers several ways to manipulate strings.

```sh
string="Hello, World!"
echo ${string:7:5}  # Output: World
```

### Arithmetic Operations

Bash supports basic arithmetic operations.

```sh
a=10
b=5
sum=$((a + b))
echo "Sum: $sum"
```

### Working with Dates

You can work with dates using the date command.

```sh
current_date=$(date +"%Y-%m-%d")
echo "Current Date: $current_date"
```

### Debugging Scripts

To debug a Bash script, you can use the -x option.

```sh
bash -x script.sh
```

## Advanced Bash Scripting

### Using Functions

Functions can be used to modularize your scripts.

```sh
function say_hello {
    echo "Hello, $1!"
}
say_hello "Alice"
```

### Working with Files and Directories

- Creating Directories:

```sh
mkdir newdir
```

- Deleting Directories:

```sh
rmdir newdir
```

- Listing Directory Contents:

```sh
ls -l
```

### Handling Signals

You can handle signals in Bash using the trap command.

```sh
trap 'echo "Script interrupted"; exit' INT
```

### Working with Background Jobs

You can run commands in the background using the & symbol.

```sh
sleep 10 &
```

### Using Here Documents

Here documents allow you to pass a block of text to a command.

```sh
cat <<EOF
This is a here document.
EOF
```

## Conclusion

Shell scripting is a essential skill for anyone working with Linux. Bash is the most
commonly used shell, but Zsh and Fish offer additional features and user-friendly
interfaces. Each shell has its own strengths, and choosing the right one depends on your
specific needs and preferences. This guide provides a comprehensive overview of Bash
scripting, covering basic to advanced topics to help you become proficient in shell
scripting.
