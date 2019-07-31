'use strict';

describe('Service: spaReservas.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaReservas.service;
  beforeEach(inject(function (_spaReservas.service_) {
    spaReservas.service = _spaReservas.service_;
  }));

  it('should do something', function () {
    expect(!!spaReservas.service).toBe(true);
  });

});
