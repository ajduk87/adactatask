import "mocha";
import assert from 'node:assert';
import { Processor } from "../Processor";



describe("Processor", () => {
    describe("process", () => {
        let processor: Processor;

        beforeEach(() => {
            processor = new Processor();
        });


        context('test results', () => {
            it("(case with all letters)for string Nikola should return ALOKIn", () => {
                assert.equal(processor.process("Nikola"), "ALOKIn");
            });

            it("(case with all numbers)for string 12345 should return 54321", () => {
                assert.equal(processor.process("12345"), "54321");
            });

            it("(case with empty input)", () => {
                assert.equal(processor.process(""), "");
            });

            it("(case with letters and numbers)for string abCD12 should return 21dcBA", () => {
                assert.equal(processor.process("abCD12"), "21dcBA");
            });


        });
    });
});