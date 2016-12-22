'use strict';

const fs = require('fs');
const os = require('os');
const expect = require('expect.js');

const Footprint = require('../');

describe('footprint', function () {
  it('Footprint.YYYYMMDD(date) should ok', function () {
    var day = new Date(2016, 11, 22);
    expect(Footprint.YYYYMMDD(day)).to.be('20161222');
    day = new Date(2017, 0, 1);
    expect(Footprint.YYYYMMDD(day)).to.be('20170101');
  });

  it('new Footprint should ok', function () {
    var footprint = new Footprint();
    expect(footprint).to.be.ok();
    var YYYYMMDD = Footprint.YYYYMMDD(new Date());
    footprint.log('hi');
    var expectFilepath = `${os.tmpdir()}/footprint-${YYYYMMDD}.log`;
    var filepath = footprint.stream.path;
    expect(filepath).to.be(expectFilepath);
  });
});
