//for loops
// to print numbers from 1-5
for (let i=1; i <=5; i++) {
    console.log(i);
}

//to print even numbers from 1-10 
//use of the if and for loops
for (let i=1; i<=10; i++) {
    if (i %2 ===0) {
        console.log(i);
    }
} 
//Here, the loop runs from 1 to 10 and checks if i is even by using the condition i % 2 === 0.

// Exercise 1                        
// program that prints numbers from 1-10
for (let i=1; i<=10; i++) {
    console.log(i);
} 

//exercise 2
//program that prints the multiplication table of 5 using a for loop
for (p=1; p<=10; p++) {
    console.log(`5 x ${p} = ${5*p}`);
}

//WHILE LOOPS
//this is used to repeat a block of code as long as a specified condition is true
//to print numbers from 1-5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
} 

//keeps asking for user input until a correct answer is provided
// let answer;
// while (answer !== "yes") {
//     answer = prompt("Do you want to continue? (yes/no)");
// }

// to find the sum of numbers 1-100 using a while loop
let sum = 0;
let q = 1;

while (q <= 100) {
    sum += q; // Add the current number to sum
    i++;      // Increment i by 1
}

console.log("The sum of numbers from 1 to 100 is:", sum);

// Do while loops 
let i = 1;
do {
console.log(i);
i++;
} while (i <= 5);

// user input authentication
let number;

do {
    number = parseInt(prompt("Enter a number between 1 and 10:")); // Get user input
} while (isNaN(number) || number < 1 || number > 10); // Keep looping if input is invalid

console.log("You entered a valid number:", number);

// breaking out of a loop
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; // Stop the loop when i equals 7
    }
    console.log(i);
}
//prints the numbers 1-10 but skips even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
} 

//nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Row ${i}, Column ${j}`);
    }
} 
//printing a right angled triangle
let rows = 5; // Number of rows in the triangle

for (let i = 1; i <= rows; i++) { // Outer loop for rows
    let pattern = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) { // Inner loop for stars
        pattern += "*"; // Add stars to the pattern
    }
    console.log(pattern); // Print the row
}