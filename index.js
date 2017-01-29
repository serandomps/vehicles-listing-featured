var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');
var Vehicle = require('vehicles-service');
var list = require('vehicles-find');

module.exports = function (sandbox, fn, options) {
    Vehicle.find({
        query: options,
        images: '288x162'
    }, function (err, vehicles) {
        if (err) {
            return fn(true, serand.none);
        }
        list(sandbox, fn, {
            vehicles: vehicles,
            title: 'Featured',
            size: 4
        });
    });
};
