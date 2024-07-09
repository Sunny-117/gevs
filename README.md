# gevs [![npm](https://img.shields.io/npm/v/gevs.svg)](https://www.npmjs.com/package/gevs)

English | [简体中文](./README.zh-CN.md)

gevs is a command-line tool used to generate specific configuration files.

## Install

```bash
npm i -g gevs
```

## Usage

```shell
gevs # When only gevs is entered, the tool will use the default configuration information to generate the .vscode/settings.json file in the current directory.

gevs <path> # When gevs is followed by a file path, the tool will use the content of the file at the specified path as the configuration information to generate the .vscode/settings.json file in the current directory.

```

## Examples

```shell
Use the default configuration:
$ gevs

Use the configuration file at the specified path:
$ gevs /path/to/your/config.json

```

## License

[MIT](./LICENSE) License © 2024 [Sunny-111](https://github.com/Sunny-117)
