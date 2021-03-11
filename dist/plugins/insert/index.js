"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPlugin = void 0;
var InsertPlugin = /** @class */ (function () {
    function InsertPlugin(core) {
        core.registerCommands("insert", this.insert.bind(this));
    }
    InsertPlugin.prototype.insert = function (value) {
        console.log("insert " + value);
    };
    return InsertPlugin;
}());
exports.InsertPlugin = InsertPlugin;
