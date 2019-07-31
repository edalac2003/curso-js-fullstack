'use strict';

describe('Service: spareservas.factory', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spareservas.factory;
  beforeEach(inject(function (_spareservas.factory_) {
    spareservas.factory = _spareservas.factory_;
  }));

  it('should do something', function () {
    expect(!!spareservas.factory).toBe(true);
  });

});
