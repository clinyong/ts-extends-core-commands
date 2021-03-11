"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
var Core = /** @class */ (function () {
    function Core() {
        this.commands = {};
    }
    Core.prototype.registerCommands = function (name, func) {
        // @ts-ignore
        this.commands[name] = func;
    };
    return Core;
}());
exports.Core = Core;
