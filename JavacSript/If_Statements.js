// IF function to check where the number is positive

let number =5;
if (number > 0) {
    console.log("The Number is positive");
}

//IF function to check a boolean function
let isRaining = true;
if (isRaining) {
    console.log("Don't forget your umbrella");
} 
//Check for eligibility to vote:
let age = 18;
if (age >= 18) {
console.log("You are eligible to vote.");
} 

//Syntax of If-Else Statement
let number1 = 7;
if (number1 % 2 === 0) {
console.log("The number is even.");
} else {
console.log("The number is odd.");
}

//Syntax of If-Else-If Statement
let score = 75;
if (score >= 80) {
console.log("You got an A.");
} else if (score >= 60) {
console.log("You got a B.");
} else {
console.log("You need to improve.");
}

//Exercise 1
//checking for the temperature
let temperature =20;
if (temperature >30) {
    console.log("Its too hot");
} else if (temperature >=20 && temperature <=30) {
    console.log("Its moderate");
} else {
    console.log("Its cold")
} 

//Exercise 2
//Admission Eligibility
let score1 =55;
if (score1 >=70) {
    console.log("Eligible for Admission");
} else if ( score1 >=50 && score1 <=69) {
    console.log("Admission on probation");
} else {
    console.log("Not Eligible for Admission");
}

// Exercise 3
// Access to clean Water

let waterAvailable =300;
if (waterAvailable >= 500) {
    console.log ("Enough Water");
} else if (waterAvailable >= 200 && waterAvailable < 500) {
    console.log ("Water is Limited");
} else {
    console.log("Water Shortage");
}

//Nested If Statements
let number2 = -3;
if (number2 >= 0) {
if (number2 === 0) {
console.log("The number is zero.");
} else {
console.log("The number is positive.");
}
} else {
console.log("The number is negative.");
}

//Nested If Statement that checks the quality of a product

let expired = false;
let quality = 7;

if (expired) {
    console.log("Do not use.");
} else {
    if (quality > 8) {
        console.log("Good Quality.");
    } else if (quality >= 5 && quality <= 8) {
        console.log("Average Quality.");
    } else {
        console.log("Poor Quality.");
    }
}


