# unwxvpkg

Unpack *.wx[va]pkg files.

A copy of [thedreamwork/unwxapkg](https://github.com/thedreamwork/unwxapkg).

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
// import * as Wxapkg from 'unwxvpkg';
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

## License

```
Copyright (c) FredZeng

All rights reserved.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
