"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __importDefault(require("ramda"));
var numbers = ramda_1.default.range(1, 9 + 1);
ramda_1.default.tap(function (n) { return console.log(n); })(numbers);
// tab
// 2차 고차함수 형태로 현재 값을 파악하게 도와주는 함수
// R.tap(callback)(array)
//# sourceMappingURL=range-tab.js.map