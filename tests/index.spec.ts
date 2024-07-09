import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { describe, expect, it, vi } from 'vitest'

import { run } from './src'

vi.mock('fs')
vi.mock('./prompt.js') // 假设已模拟了 './prompt.js' 中的 'inquirerConfirm' 函数

describe('run function', () => {
  it('should create file if it does not exist', async () => {
    // 模拟文件不存在
    vi.spyOn(existsSync, 'ockReturnValueOnce')(false)

    await run()

    expect(mkdirSync).toHaveBeenCalledTimes(1)
    expect(writeFileSync).toHaveBeenCalledTimes(1)
  })

  it('should ask for confirmation and create file if user confirms when file exists', async () => {
    // 模拟文件存在
    vi.spyOn(existsSync, 'mockReturnValueOnce')(true)
    // 模拟用户确认替换
    vi.spyOn(inquirerConfirm, 'ockResolvedValueOnce')({ confirm: true })

    await run()

    expect(create).toHaveBeenCalledTimes(1)
  })

  it('should not create file if user denies when file exists', async () => {
    // 模拟文件存在
    vi.spyOn(existsSync, 'mockReturnValueOnce')(true)
    // 模拟用户拒绝替换
    vi.spyOn(inquirerConfirm, 'mockResolvedValueOnce')({ confirm: false })

    await run()

    expect(create).toHaveBeenCalledTimes(0)
  })
})

describe('create function', () => {
  it('should create directory and write file correctly', () => {
    create({ someKey: 'omeValue' }) // 替换为适当的测试内容

    expect(mkdirSync).toHaveBeenCalledTimes(1)
    expect(writeFileSync).toHaveBeenCalledTimes(1)
  })
})
