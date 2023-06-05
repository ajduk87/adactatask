export class Processor {

    public process(input: string): string | null {

        var startTime = performance.now();

        let reverseString = "";
        for (let char of input) {
            if (char.toLowerCase() != char.toUpperCase()) {
                if (char.toUpperCase() === char) {
                    char = char.toLowerCase();
                } else {
                    char = char.toUpperCase();
                }

            }
            reverseString = char + reverseString;
        }

        var endTime = performance.now();

        console.log(`Time of execution took ${endTime - startTime} milliseconds`);

        console.log('Result ' + reverseString);



        const fs = require('fs')

        // create a JSON object
        const result = {
            input: input,
            output: reverseString,
            timeOfExecution: `Time of execution took ${endTime - startTime} milliseconds`
        }

        // convert JSON object to a string
        const data = JSON.stringify(result);
        let err;

        // write JSON string to a file
        fs.writeFile('processed.json', data, function () {
            console.log('Result is saved in file processed.json');
        });


        return reverseString;
    }

}