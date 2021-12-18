"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __importDefault(require("ramda"));
// 포인트 없는 함수
var array = ramda_1.default.range(1, 10);
var dump = ramda_1.default.pipe(ramda_1.default.tap(function (n) { return console.log(n); }));
dump(array);
//# sourceMappingURL=dump.js.map