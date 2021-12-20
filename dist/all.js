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
var status = [1, 3, 2, 4];
var list = [
    {
        title: 'one',
        status: [1]
    },
    {
        title: 'two',
        status: [1, 2]
    },
    {
        title: 'three',
        status: [1, 2, 3]
    },
    {
        title: 'four',
        status: [1, 2, 3, 4]
    },
];
{
    // 1차
    var f = function (list) { return R.filter(function (li) { return status.every(function (v) { return li.status.includes(v); }); }, list); };
    console.log(f(list));
    //2차 ramda
    var isAllStatusIncluded_1 = R.equals(true);
    var filterStatusRamdaWithEquals = function (list) { return R.filter(function (li) { return R.all(isAllStatusIncluded_1, // R.equals(true)
    R.map(function (selectedStatus) { return R.includes(selectedStatus, li.status || []); }, status)); }, // booelan
    list); };
    console.log(filterStatusRamdaWithEquals(list));
    //3차 ramda 수정
    var filterStatusRamdaWithOnlyAll = function (list) { return R.filter(function (li) { return R.all(function (selectedStatus) { return !R.isNil(li.status) && R.includes(selectedStatus, li.status); })(status); }, list); };
    console.log(filterStatusRamdaWithOnlyAll(list));
    // const selectedStageFilter = R.ifElse(
    //   R.equals(0),
    //   () => R.T,
    //   () => R.equals(Number(selectedStage)),
    // )(Number(selectedStage))
    // const filterStage = (transfers: TransferItem[]) => (R.filter(transfer => selectedStageFilter(transfer.stage), transfers))
    // // const isAllStatusIncluded = R.equals(true)
    // // const filterStatus = (transfers: TransferItem[]) => R.filter(
    // //   transfer => R.all(
    // //     isAllStatusIncluded, // R.equals(true)
    // //     R.map(selectedStatus => R.includes(selectedStatus, transfer.status || []), selectedStatusList), // array
    // //   ), // booelan
    // //   transfers, // array
    // // )
    // const filterStatus = (transfers: TransferItem[]) => R.filter(
    //   transfer => R.all(
    //     (selectedStatus: TransferStatus) => !R.isNil(transfer.status) && R.includes(selectedStatus, transfer.status),
    //   )(selectedStatusList),
    //   transfers,
    // )
    // const transferListFilteredByStageAndStatus = R.pipe(filterStage, filterStatus)(transfers)
    // yield put(updateFilteredTransferList(transferListFilteredByStageAndStatus))
}
//# sourceMappingURL=all.js.map