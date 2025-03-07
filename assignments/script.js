//-----------------------20-QUESTIONS-CONDITIONS-LOOPS------------------------
// 1. Write a function which determines whether a number is pozitive or negative.
// 2. Write a code to determine whether a year is a leap year or not.
// 3. Write a function that returns whether a given number is odd or even.
// 4. Write a code that takes a user's age and checks if they are of legal age.
// 5. Write a function that finds the largest of three numbers entered by the user.
// 6. Print the numbers from 1 to 100 that are divisible by 3.
// 1. Write a code block that calculates the Fibonacci sequence up to a given term.
// 2. Create a loop that counts how many times each letter appears in a given string.
// 3. Write a code block that determines whether a given number is prime or not.
// 4. Write a code that finds the duplicate elements in an array and prints each one only once.
// 5. Write an algorithm that reverses a number (e.g., 123 → 321).
// 6. Write a loop that calculates the sum of numbers from 1 to 1000.

// 1. Write a function which determines whether a number is pozitive or negative.

// let q1 = +prompt("Enter a Number");

// if (q1 < 0) {
//     console.log("You've provided a negative number. Have a positive day.");
// }else {
//     console.log(`This was a test. You'll get ${q1} Bitcoin. And you've put a pozitive number.`);
// }

// 2. Write a code to determine whether a year is a leap year or not.

// let q2 = prompt("Enter a date (YYYY-MM-DD")
// let q2date = new Date(q2);
// if (q2date % 4 === 0){
//     console.log("This is a leap year.")
// }else {console.log("This is just like another year.")}

// 3. Write a function that returns whether a given number is odd or even.

// let q3 = +prompt("Enter a number");
// if(q3 % 2 === 0){
//     console.log("You've provided an even number.")
// }else{
//     console.log("This is an odd number")
// }

// 4. Write a code that takes a user's age and checks if they are of legal age.

// let q4 = prompt("Enter your age YYYY-MM-DD");

// let q4BirthDate = new Date(q4);
// let q4CurrentDate = new Date();

// let q4age = q4CurrentDate.getFullYear(18) - q4BirthDate.getFullYear();
// let q4month = q4BirthDate.getMonth()

// console.log(q4age);
// console.log(q4month);

const month = +prompt("Enter a month (1-12)");
const day = +prompt("Enter a day (1-31)");

const isValidMonth = month >= 1 && month <= 12;
const isValidDay = day >= 1 && day <= 31;

if (isValidMonth && isValidDay) {
  if ((month >= 3 && month <= 5) || (month == 2 && day >= 22)) {
    console.log(`${month}. Month and ${day}. day is Spring`);
  } else if ((month == 6 && day >= 21) || (month == 7) || (month == 8) || (month == 9 && day <= 21)) {
    console.log(`${month}. Month and ${day}. day is Summer`);
  } else if ((month == 9 && day >= 22) || (month == 10) || (month == 11) || (month == 12 && day <= 20)) {
    console.log(`${month}. Month and ${day}. day is Fall`);
  } else if ((month == 12 && day >= 21) || (month == 1) || (month == 2 && day <= 20)) {
    console.log(`${month}. Month and ${day}. day is Winter`);
  } else {
    console.log("Invalid date");
  }
} else {
  console.log("Invalid input! Please enter a valid month (1-12) and day (1-31).");
}
