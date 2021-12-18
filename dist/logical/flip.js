"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("ramda"));
// flip -> 함수의 매개변수 순서를 서로 바꿔주는 역할
var flip = function (cb) { return function (a) { return function (b) { return cb(b)(a); }; }; };
var reverseSubstract = flip(R.subtract);
var newArray = R.pipe(R.map(reverseSubstract(10)), R.tap(function (a) { return console.log(a); }))(R.range(1, 9 + 1));
console.log(newArray);
//# sourceMappingURL=flip.js.map