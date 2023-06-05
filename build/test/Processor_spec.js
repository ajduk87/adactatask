"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const node_assert_1 = __importDefault(require("node:assert"));
const Processor_1 = require("../Processor");
describe("Processor", () => {
    describe("process", () => {
        let processor;
        beforeEach(() => {
            processor = new Processor_1.Processor();
        });
        context('test results', () => {
            it("(case with all letters)for string Nikola should return ALOKIn", () => {
                node_assert_1.default.equal(processor.process("Nikola"), "ALOKIn");
            });
            it("(case with all numbers)for string 12345 should return 54321", () => {
                node_assert_1.default.equal(processor.process("12345"), "54321");
            });
            it("(case with empty input)", () => {
                node_assert_1.default.equal(processor.process(""), "");
            });
            it("(case with letters and numbers)for string abCD12 should return 21dcBA", () => {
                node_assert_1.default.equal(processor.process("abCD12"), "21dcBA");
            });
        });
    });
});
