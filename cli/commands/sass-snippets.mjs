import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'

/**
 * 将 sass 变量转化为 vscode 的代码片段，方便使用变量时获得代码提示
 * @param {string} args[0] sass 变量的文件地址（相对于执行命令所在目录的地址）
 * @param {string} args[1] 输出 snippets 文件的目录（相对于执行命令所在目录的地址）
 */
export default function (args) {
  // sass 变量的文件地址
  const sassPath = path.join(process.cwd(), args[0])
  // 输出 snippets 文件的目录
  const snippetsDir = path.join(process.cwd(), args[1])

  // 读取文件
  const readlineInterface = readline.createInterface({
    input: fs.createReadStream(sassPath),
  })

  // 变量列表
  const variableList = []

  // 逐行解析变量
  readlineInterface.on('line', (line) => {
    if (line === '') return
    if (line.startsWith('//')) {
      variableList.push({ comment: line.slice(2).trim(), name: '', value: '' })
      return
    }
    if (line.startsWith('$')) {
      const [name, value] = line.split(':')
      variableList.at(-1).name = name.trim()
      if (line.endsWith(';')) {
        variableList.at(-1).value = value.trim().replace(';', '')
      }
      return
    }
    variableList.at(-1).value += line.trim() + ' '
    if (line.endsWith(';')) {
      variableList.at(-1).value = variableList.at(-1).value.trim().replace(';', '')
    }
  })

  // 解析结束，生成 vscode 代码片段
  readlineInterface.on('close', () => {
    const snippets = variableList.reduce((res, variable) => {
      res[variable.name] = {
        scope: 'vue,scss,sass',
        prefix: [variable.name, variable.value],
        body: [`$${variable.name}`],
        description: `${variable.comment} ${variable.value}`,
      }
      return res
    }, {})
    if (!fs.existsSync(snippetsDir)) {
      fs.mkdirSync(snippetsDir, { recursive: true })
    }
    const fileName = `${path.dirname(sassPath).split('/').at(-1)}-${path.basename(sassPath).split('.')[0]}`
    const snippetsPath = path.join(snippetsDir, `./${fileName}.code-snippets`)
    fs.writeFileSync(snippetsPath, JSON.stringify(snippets))
    exec(`npx prettier --write ${snippetsPath}`)
    console.log(`✅ 代码片段已保存到: ${snippetsPath}`)
  })
}
