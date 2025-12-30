#!/usr/bin/env node
import sassSnippets from './commands/sass-snippets.mjs'
import tagPrd from './commands/tag-prd.mjs'

// 命令及其执行器映射
const commandsExecutors = {
  'sass-snippets': sassSnippets,
  'tag-prd': tagPrd,
}

const [_, __, command, ...args] = process.argv

const executor = commandsExecutors[command]
if (executor) {
  executor(args)
} else {
  console.error(command, '命令不存在')
}
