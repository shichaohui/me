import { CommandModule } from 'yargs'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as chalk from 'chalk'
import * as semver from 'semver'
import * as execa from 'execa'

const curVersion = require(path.join(process.cwd(), 'package.json')).version as string
const curBranch = execa.sync('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout

const run = (bin, args, opts = {}) => {
  execa(bin, args, { stdio: 'inherit', ...opts })
}

async function updatePkgVersion(version: string, tag: string) {
  const pkgPath = path.resolve(process.cwd(), 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

  await run('git', ['add', '-A'])
  await run('git', ['commit', '-m', `release: ${tag}`])
}

async function tagBranch(tag: string) {
  await run('git', ['tag', tag])
  await run('git', ['push', 'origin', `refs/tags/${tag}`])
  await run('git', ['push'])
}

const commandModule: CommandModule = {
  command: 'tag prd',
  describe: '打生成环境 Tag，默认版本号 + 1',
  handler: async () => {
    // 检查分支
    if (curBranch !== 'master') {
      return console.log(chalk.red(`❌ only prd tag on branch master.`))
    }
    // patch +1
    const newVersion = semver.inc(curVersion, 'patch')

    // 修改版本号、打tag、并推送
    const tag = `prd-${newVersion}`
    await updatePkgVersion(newVersion, tag)
    await tagBranch(tag)
    console.log(chalk.bold(chalk.green(`🎉 Successfully published ${tag}.`)))
  }
}

module.exports = commandModule
