# linecount

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno script that recursively counts lines of code in specified file types, grouped by directory.

## Features

- Recursively scans the current directory for source files.
- Filters files by extension (defaults to `.c` and `.h`).
- Aggregates line counts for all matching files within each directory.
- Outputs a simple list of directories and their total line counts.

## Requirements

- [Deno](https://deno.land/) runtime

## Usage

Run the script from the root of the directory you want to analyze. It will output the line counts for the current directory and any subdirectories containing matching files.

```sh
deno run --allow-read https://code4fukui.github.io/linecount/linecount.js
```

### Example Output

```
. 580
src 1250
src/utils 430
```

## Customization

To count lines for different file types, you need to modify the `exts` array at the top of the `linecount.js` script.

For example, to count lines in JavaScript and TypeScript files, change this line:
```javascript
const exts = [".c", ".h"];
```
to:
```javascript
const exts = [".js", ".ts"];
```

## Install

Install the script as an executable command named `linecount`.

```sh
deno install --allow-read -n linecount https://code4fukui.github.io/linecount/linecount.js
```

You can then run it directly from any directory:

```sh
linecount
```

## Uninstall

```sh
deno uninstall linecount
```

## License

This project is unlicensed.