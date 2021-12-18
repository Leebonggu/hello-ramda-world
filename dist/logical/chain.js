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
exports.flapMap = void 0;
var R = __importStar(require("ramda"));
var array = [1, 2, 3];
R.pipe(R.chain(function (n) { return [n, n]; }), R.tap(function (n) { return console.log(n); }))(array);
R.pipe(R.chain(R.append, R.head), R.tap(function (n) { return console.log(n); }))(array);
// 매개변수 1개일 떄는 flatMap
var flapMap = function (f) { return R.pipe(R.map(f), R.flatten); };
exports.flapMap = flapMap;
//# sourceMappingURL=chain.js.map