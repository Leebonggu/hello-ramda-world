"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __importDefault(require("ramda"));
// 람다 함수의 2가지 사용법
// 1. 일반함수
// 2. 고차함수
console.log(ramda_1.default.add(1, 2), // 3 
ramda_1.default.add(1)(2));
//# sourceMappingURL=auto-curry.js.map