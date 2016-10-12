#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise
let path = require('path')

async function rm(rootDir) {
  if((await fs.stat(rootDir)).isFile()){
    await fs.unlink(rootDir)
    return
  }

  let fileNames = await fs.readdir(rootDir)
  let lsps = []
  for(let file of fileNames){
    let nextPath = path.join(rootDir, file)
    let lsp = rm(nextPath)
    lsps.push(lsp)
  }

  await Promise.all(lsps)
  await fs.rmdir(rootDir)
}

async function main() {
  let p = process.argv[2]
  if(p == undefined) {
    process.stdout.write('please specify a file or directory to remove \n')
    return
  }

  await rm(p)
}

main()