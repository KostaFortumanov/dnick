import {Injectable} from '@angular/core';
import {Problem} from "../model/problem";

@Injectable({
    providedIn: 'root'
})
export class ProblemService {

    constructor() {
    }

    getProblem(id: number): Problem {
        return {
            problemDescription: "<p>A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array. Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.</p>",
            functionDescription: "<p><b>Function description</b></p><p>Complete the function rotLeft in the editor below. rotLeft has the following parameter(s):</p><ul><li>int a[n]: the array to rotate</li><li>int d: the number of rotations</li></ul>",
            returns: "<p><b>Returns</b></p><ul><li>int a'[n]: the rotated array</li></ul>",
            inputFormat: "<p><b>Input format</b></p><p>The first line contains two space-separated integers n and d, the size of a and the number of left rotations. The second line contains n space-separated integers, each an a[i].</p>",
            sampleInput: "<p><b>Sample Input</b></p><p>5 4<br/>1 2 3 4 5</p>",
            sampleOutput: "<p><b>Sample Output</b></p><p>5 1 2 3 4</p>",
            explanation: "<p><b>Explanation</b></p><p>When we perform left rotations, the array undergoes the following sequence of changes:<br/>[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2,] -> [4,5,1,2,3] -> [5,1,2,3,4]</p>",
            starterCode: "/*\n" +
                " * Complete the 'rotLeft' function below.\n" +
                " *\n" +
                " * The function is expected to return an INTEGER_ARRAY.\n" +
                " * The function accepts following parameters:\n" +
                " *  1. INTEGER_ARRAY a\n" +
                " *  2. INTEGER d\n" +
                " */\n" +
                "\n" +
                "function rotLeft(a, d) {\n" +
                "    // Write your code here\n" +
                "}\n" +
                "\n" +
                "const fs = require('fs');\n" +
                "\n" +
                "process.stdin.resume();\n" +
                "process.stdin.setEncoding('utf-8');\n" +
                "\n" +
                "let inputString = '';\n" +
                "let currentLine = 0;\n" +
                "\n" +
                "process.stdin.on('data', function(inputStdin) {\n" +
                "    inputString += inputStdin;\n" +
                "});\n" +
                "\n" +
                "process.stdin.on('end', function() {\n" +
                "    inputString = inputString.split('\\n');\n" +
                "\n" +
                "    main();\n" +
                "});\n" +
                "\n" +
                "function readLine() {\n" +
                "    return inputString[currentLine++];\n" +
                "}\n" +
                "\n" +
                "function main() {\n" +
                "    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);\n" +
                "\n" +
                "    const firstMultipleInput = readLine().replace(/\\s+$/g, '').split(' ');\n" +
                "\n" +
                "    const n = parseInt(firstMultipleInput[0], 10);\n" +
                "\n" +
                "    const d = parseInt(firstMultipleInput[1], 10);\n" +
                "\n" +
                "    const a = readLine().replace(/\\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));\n" +
                "\n" +
                "    const result = rotLeft(a, d);\n" +
                "\n" +
                "    ws.write(result.join(' ') + '\\n');\n" +
                "\n" +
                "    ws.end();\n" +
                "}\n",
        }
    }
}
