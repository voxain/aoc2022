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
let winner = 0; // Elf with the most weight

for (let i = 0; i < input.length; i++) {
    if (input[i] == '') elf++; // If newline, switch to next elf
    else elves[elf] ? elves[elf] += parseInt(input[i]) : elves[elf] = parseInt(input[i]); // Add calories of current line to current elf's total
}

elves.sort((a, b) => {return a - b}); // Why is this such a hassle in javascript

console.log('Biggest amount:', elves.at(-1))

console.log('Total of top 3 elves:', elves.at(-1) + elves.at(-2) + elves.at(-3))