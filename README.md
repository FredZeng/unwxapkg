# unwxvpkg

Unpack *.wx[va]pkg files.

## Installation

Using npm:

```bash
$ npm i -g unwxvpkg
```

Using yarn:

```bash
$ yarn add -g unwxvpkg
```

## Usage

unwxapkg <your *.wx[va]pkg file> [output folder]

```bash
unwxapkg core.wxvpkg
// or unwxvpkg core.wxvpkg
```

`unwxapkg` is same as `unwxvpkg`.

## Node.js

```js
const Wxapkg = require('unwxvpkg');
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync('your.wxvpkg');
const wxapkg = new Wxapkg(file);
const files = wxapkg.decode();

files.forEach((f) => {
  // custom handle file writing
  fs.writeFileSync(path.join(process.cwd(), f.name), f.chunk, 'binary');
});
```
