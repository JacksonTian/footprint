# Footprint

A very very small logger.

## Installation

```sh
$ npm install footprint -S
```

## Usage

```js
var Footprint = require('footprint');

// new instance
var logger = new Footprint({
  logdir: os.tmpdir(), // default: `os.tmpdir()`
  prefix: 'footprint-', // default: `"footprint-"`
  enable: true, // default: `true`
  format: Footprint.YYYYMMDD // default: `Footprint.YYYYMMDD(new Date())`
});

// log some things
logger.log('some things');
// => write into `${logdir}${prefix}${format(new Date())}.log`
// cat `${logdir}${prefix}${format(new Date())}.log`
// => some things
```

## License
The MIT license
