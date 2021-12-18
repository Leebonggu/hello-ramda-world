"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = __importDefault(require("ramda"));
var originalArray = [1, 2, 3];
var resultArrray = ramda_1.default.pipe(ramda_1.default.map(ramda_1.default.add(1)))(originalArray);
console.log(originalArray);
console.log(resultArrray);
//# sourceMappingURL=pure-function.js.map