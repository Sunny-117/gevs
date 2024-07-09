import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

export function create(content: Record<string, any>, filePath: string) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, JSON.stringify(content, null, 2))
}
