// Find the elf that is carrying the most calories.

let input =
`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

input = input.split('\n');

let elf = 0; // Elf selector
let elves = []; // Array of all elve's total weights

for (let i = 0; i < input.length; i++) {
    if (input[i] == '') elf++; // If newline, switch to next elf
    else elves[elf] ? elves[elf] += parseInt(input[i]) : elves[elf] = parseInt(input[i]); // Add calories of current line to current elf's total
}

console.log(elves)