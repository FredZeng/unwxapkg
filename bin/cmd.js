#!/usr/bin/env node

var Wxapkg = require('../src/index');

const fs = require('fs');
const path = require('path');
const mkdirp = require('../src/mkdirp');

const utf8_suffixs = ['.html', '.js', '.css'];

let file = fs.readFileSync(process.argv[2]);

let destination = process.argv[3] ? process.argv[3] : 'wxapkg.unpack';
let wxapkg = new Wxapkg(file);
let files = wxapkg.decode();
files.forEach((f) => {
  let filePath = path.join(process.cwd(), destination, f.name);
  let dir = path.dirname(filePath);
  mkdirp(dir, function (err) {
    if (err) return console.error(err);

    console.log(filePath);
    if (utf8_suffixs.some((it) => filePath.endsWith(it))) {
      fs.writeFileSync(filePath, f.chunk, 'utf8');
    } else {
      fs.writeFileSync(filePath, f.chunk, 'binary');
    }
  });
});
