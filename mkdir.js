#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function mkdir() {
  let path = process.argv[2]
  if(path == undefined) {
    process.stdout.write('specify path \n')
    return
  }
  await fs.mkdir(path)
}

mkdir()