#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise,
    text = process.argv[2];
async function echo() {
    console.log(text);
}

echo()