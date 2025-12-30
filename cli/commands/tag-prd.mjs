import chalk from 'chalk'
import execa from 'execa'
import fs from 'fs-extra'
import path from 'node:path'
import semver from 'semver'

/**
 * 打生成环境 Tag，默认版本号 + 1
 */
export default async function (_) {
  // 检查分支
  const curBranch = execa.sync('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout
  if (curBranch !== 'master') {
    return console.log(chalk.red(`❌ only prd tag on branch master.`))
  }

  // patch +1
  const pkgPath = path.resolve(process.cwd(), 'package.json')
  const pkgContent = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  const curVersion = pkgContent.version
  const newVersion = semver.inc(curVersion, 'patch')

  if (!newVersion) {
    return console.log(chalk.red(`❌ failed to increment version from ${curVersion}.`))
  }

  // 修改版本号、打tag、并推送
  const tag = `prd-${newVersion}`
  await updatePkgVersion(newVersion, tag)
  await tagBranch(tag)
  console.log(chalk.bold(chalk.green(`🎉 successfully published ${tag}.`)))
}

async function run(bin, args, opts = {}) {
  await execa(bin, args, { stdio: 'inherit', ...opts })
}

async function updatePkgVersion(version, tag) {
  const pkgPath = path.resolve(process.cwd(), 'package.json')
  const pkgContent = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkgContent.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkgContent, null, 2) + '\n')

  await run('git', ['add', '-A'])
  await run('git', ['commit', '-m', `release: ${tag}`])
  await run('git', ['push', 'origin'])
}

async function tagBranch(tag) {
  await run('git', ['tag', tag])
  await run('git', ['push', 'origin', `refs/tags/${tag}`])
}
