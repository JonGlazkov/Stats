"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // 28/10/2018
    const dateParts = dateString.
        split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
exports.dateStringToDate = dateStringToDate;
