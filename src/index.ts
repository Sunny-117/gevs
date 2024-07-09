#! /usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { inquirerConfirm } from "./prompt";

const defaultContent = {
  "editor.formatOnSave": true,
};
const filePath = path.join(process.cwd(), ".vscode", "settings.json");

async function run() {
  const absolutePath = process.argv[2];
  let content = defaultContent;
  if (absolutePath) {
    content = JSON.parse(readFileSync(absolutePath, "utf-8"));
  }
  if (existsSync(filePath)) {
    const answer = await inquirerConfirm(`文件已存在，是否要替换?`);
    if (answer.confirm) {
      create(content);
    }
  } else {
    create(content);
  }
}
run();
function create(content) {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(content, null, 2));
}
