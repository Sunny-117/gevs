// src/index.ts
import { existsSync, readFileSync } from "node:fs";
import path2 from "node:path";
import process from "node:process";

// src/prompt.ts
import inquirer from "inquirer";
async function inquirerConfirm(message) {
  const answer = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message
  });
  return answer;
}

// src/create.ts
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
function create(content, filePath2) {
  mkdirSync(path.dirname(filePath2), { recursive: true });
  writeFileSync(filePath2, JSON.stringify(content, null, 2));
}

// src/index.ts
var defaultContent = {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
};
var filePath = path2.join(process.cwd(), ".vscode", "settings.json");
async function run() {
  console.log("start...");
  const absolutePath = process.argv[2];
  let content = defaultContent;
  if (absolutePath) {
    content = JSON.parse(readFileSync(absolutePath, "utf-8"));
  }
  if (existsSync(filePath)) {
    const answer = await inquirerConfirm(`\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u662F\u5426\u8981\u66FF\u6362?`);
    if (answer.confirm) {
      create(content, filePath);
    }
  } else {
    create(content, filePath);
  }
}
run();
