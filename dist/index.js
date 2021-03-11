"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCore = void 0;
var core_1 = require("./core");
var insert_1 = require("./plugins/insert");
function createCore() {
    var core = new core_1.Core();
    new insert_1.InsertPlugin(core);
    return core;
}
exports.createCore = createCore;
