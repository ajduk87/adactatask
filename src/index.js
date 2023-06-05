"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Processor_1 = require("./Processor");
const prompt = (0, prompt_sync_1.default)();
var input = prompt('Enter input string: ');
console.log('Hello ,' + input);
var procesor = new Processor_1.Processor();
procesor.process(input);
