import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { logger } from './logger'

export function create(content: Record<string, any>, filePath: string) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, JSON.stringify(content, null, 2))
  logger.info(`create ${filePath} success`)
}
