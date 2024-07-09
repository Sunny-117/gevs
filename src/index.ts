import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { inquirerConfirm } from './prompt'
import { create } from './create'

const defaultContent = {
  'editor.formatOnSave': true,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
    'source.organizeImports': 'never',
  },
}
const filePath = path.join(process.cwd(), '.vscode', 'settings.json')

async function run() {
  const absolutePath = process.argv[2]
  let content = defaultContent
  if (absolutePath) {
    content = JSON.parse(readFileSync(absolutePath, 'utf-8'))
  }
  if (existsSync(filePath)) {
    const answer = await inquirerConfirm(`文件已存在，是否要替换?`)
    if (answer.confirm) {
      create(content, filePath)
    }
  }
  else {
    create(content, filePath)
  }
}
run()
