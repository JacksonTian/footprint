'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');

const pad = function(d) {
  return '' + (d < 10 ? ('0' + d) : d);
};

class Footprint {
  constructor(opts) {
    opts || (opts = {});
    this.prefix = opts.prefix || 'footprint-';
    this.logdir = opts.logdir || os.tmpdir();
    this.enable = opts.enable !== false;
    this.format = opts.format || Footprint.YYYYMMDD;
    this.mkdir = true;
    // current day
    this.current = null;
    this.stream = null;
  }

  ensureLogfile() {
    var current = this.format(new Date());
    if (this.current !== current) {
      this.current = current;
      this.createStream();
    }
  }

  ensureDir(filepath) {
    // make sure dir exist
    if (this.mkdir) {
      mkdirp.sync(path.dirname(filepath));
    }
  }

  createStream() {
    if (this.enable) {
      var filename = this.prefix + this.current + '.log';
      var filepath = path.join(this.logdir, filename);
      // close old stream
      this.stream && this.stream.end();
      // create new stream
      this.ensureDir(filepath);
      this.stream = fs.createWriteStream(filepath, {flags: 'a'});
    }
  }

  log(data) {
    if (this.enable) {
      this.ensureLogfile();
      this.stream.write(data);
      this.stream.write(os.EOL);
    }
  }
}

Footprint.YYYYMMDD = function(date) {
  var YYYY = date.getFullYear();
  var MM = pad(date.getMonth() + 1);
  var DD = pad(date.getDate());
  return '' + YYYY + MM + DD;
};

module.exports = Footprint;
