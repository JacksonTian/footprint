# petter

## Installation

```sh
$ npm install petter -S
```

## Usage

```
var Petter = require('petter');
var petter = new Petter({
  logdir: os.tmpdir(), // default: `os.tmpdir()`
  prefix: 'petter-', // default: `"petter-"`
  enable: true, // default: `true`
  format: Petter.YYYYMMDD // default: `Petter.YYYYMMDD(new Date())`
});

petter.log('some things');
// => write into `${logdir}${prefix}${format(new Date())}.log`
// cat `${logdir}${prefix}${format(new Date())}.log`
// => some things
```

## License
The MIT license
