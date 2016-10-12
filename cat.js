#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function cat() {
  let file = process.argv[2]
  if(file == undefined || !(await fs.stat(file)).isFile()) {
    process.stdout.write('no such file.. \n')
    return
  }

  process.stdout.write(await fs.readFile(file, 'utf8'))
}

cat()