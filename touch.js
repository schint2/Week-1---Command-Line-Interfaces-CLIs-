#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise

async function touch() {
  let file = process.argv[2]
  if(file == undefined) {
    process.stdout.write('no such file.. \n')
    return
  }

  try {
    await fs.utimes(file, new Date(),new Date())
  } catch(err) {
    await fs.writeFile(file, '')
  }

}

