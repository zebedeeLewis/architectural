"use strict";
exports.__esModule = true;
exports.create = void 0;
var I = require("immutable");
var dummyFactory = I.Record({});
exports.create = I.Record({ error: 'initial', model: dummyFactory({})
}, 'Failure');
