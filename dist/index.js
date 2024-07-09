#! /usr/bin/env node

// src/index.ts
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

// src/prompt.ts
import inquirer from "inquirer";
var inquirerConfirm = async (message) => {
  const answer = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message
  });
  return answer;
};

// src/index.ts
var defaultContent = {
  "editor.formatOnSave": true
};
var filePath = path.join(process.cwd(), ".vscode", "settings.json");
async function run() {
  const absolutePath = process.argv[2];
  let content = defaultContent;
  if (absolutePath) {
    content = JSON.parse(readFileSync(absolutePath, "utf-8"));
  }
  if (existsSync(filePath)) {
    const answer = await inquirerConfirm(`\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u662F\u5426\u8981\u66FF\u6362?`);
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
