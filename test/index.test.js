'use strict';

const assert = require('assert');
const os = require('os');

const Footprint = require('../');

describe('footprint', function () {
  it('Footprint.YYYYMMDD(date) should ok', function () {
    const day1 = new Date(2016, 11, 22);
    assert.deepStrictEqual(Footprint.YYYYMMDD(day1), '20161222');
    const day2 = new Date(2017, 0, 1);
    assert.deepStrictEqual(Footprint.YYYYMMDD(day2), '20170101');
  });

  it('new Footprint should ok', function () {
    var footprint = new Footprint();
    var YYYYMMDD = Footprint.YYYYMMDD(new Date());
    footprint.log('hi');
    var expectFilepath = `${os.tmpdir()}/footprint-${YYYYMMDD}.log`;
    var filepath = footprint.stream.path;
    assert.deepStrictEqual(filepath, expectFilepath);
  });
});
