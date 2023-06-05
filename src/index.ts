import { CharacterEncoding } from "crypto";
import promptSync from "prompt-sync";
import { Processor } from "./Processor";

const prompt = promptSync();

var input = prompt('Enter input string: ');

console.log('Hello ,' + input);

var procesor = new Processor();

procesor.process(input);
