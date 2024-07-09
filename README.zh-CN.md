# gevs [![npm](https://img.shields.io/npm/v/gevs.svg)](https://www.npmjs.com/package/gevs)

[English](./README.md) | 简体中文

gevs 是一个用于生成特定配置文件的命令行工具

## Install

```bash
npm i -g gevs
```

## 用法
```shell
gevs # 当仅输入 `gevs` 时，工具将使用默认配置信息在当前目录下生成 `.vscode/settings.json` 文件。

gevs <路径>  # 输入 `gevs` 并跟上一个文件路径时，工具会将指定路径下的文件内容作为配置信息，在当前目录下生成 `.vscode/settings.json` 文件。
```

## 示例
1.  使用默认配置：
    `$ gevs`
2. 使用指定路径的配置文件：
    `$ gevs /path/to/your/config.json`

## License

[MIT](./LICENSE) License © 2024 [Sunny-117](https://github.com/Sunny-117)
