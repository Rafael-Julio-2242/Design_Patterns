"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dataAnalisys;
function dataAnalisys(json) {
    const result = JSON.parse(json);
    const { data } = result;
    return `Data | Name: ${data.name} - Age: ${data.age} - City: ${data.city} |`;
}
