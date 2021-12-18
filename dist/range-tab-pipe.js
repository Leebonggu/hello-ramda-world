"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __importDefault(require("ramda"));
var array = ramda_1.default.range(1, 10);
ramda_1.default.pipe(ramda_1.default.tap(function (n) { return console.log(n); }))(array);
//# sourceMappingURL=range-tab-pipe.js.map