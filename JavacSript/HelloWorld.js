console.log("Hello world");
// declaring the variable num
let num;

// assigning 5 to num 
num =5;
console.log(num); 

// assign 5 to variable score
let score = 5; 
console.log(score); // 5
// change the value of score to 3 
score = 3; 
console.log(score); // 3 

// Rules for Naming javascript variables
// valid 
//let message = "hello"; 
let _message = "hello";
let $message = "hello";

//console.log(message);
console.log(_message);
console.log($message);

//variable names are case sensitive
let age = 23; 
let Age = 20;
console.log(age); // 23 
console.log(Age); // 20

// Javascript constants 

// declaring a constant
//assigning 5 to num
//const num =5;

// trying to change the value of num
num =10;
console.log(num);// an erroer is generated here because const can't be changed

//function to get the product of two numbers
let num1 =5
let num2 =3
function multiply (num1, num2) {
    return num1 *num2
}

console.log(multiply(5,3)); //output is 15

//displaying a message
let message = "Hello, JavaScript!";
console.log(message); //displays the message "Hello Javascript" 

//printing the values stored in variables

//storing the value in a greet variable
const greet = "Hello, Sir";

//printing the variable
console.log(greet);


