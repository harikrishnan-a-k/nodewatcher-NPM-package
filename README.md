

# nodewatcher

nodewatcher is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.




# Installation



```bash
npm install -g @harikrishnan_a_k/nodewatcher
```

And nodewatcher will be installed globally to your system path.




# Usage


```bash
nodewatcher [your JS file]
```
if no File is passed as argument nodewatcher will look for index.js, if not found will throw file not found error.

For CLI options, use the `-h` (or `--help`) argument:

```bash
nodewatcher -h
```
