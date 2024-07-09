import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { inquirerConfirm } from './prompt'
import { create } from './create'
import { logger } from './logger'

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
  try {
    if (existsSync(filePath)) {
      const answer = await inquirerConfirm(`文件已存在，是否要替换?`)
      if (answer.confirm) {
        create(content, filePath)
      }
      else {
        logger.info(`gevs程序已安全退出`)
      }
    }
    else {
      create(content, filePath)
    }
  }
  catch (error) {
    // 处理用户中断操作时的错误
    if (error instanceof Error) {
      logger.info(`gevs程序已安全退出`)
      process.exit(1)
    }
    else {
      throw error
    }
  }
}
run()
