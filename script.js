//Part 1: Math Problems
//We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
const n1 = 10;
const n2 = 11;
const n3 = 12;
const n4 = 17;
//// Check one: add up to 50
//const isSum50 = (n1 + n2 + n3 + n4) == 50;
//// Check two: at least two odd numbers
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//// Check three: no number larger than 25
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//// Check four: all unique numbers
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
//// Put the results into a single variable
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
//// Finally, log the results.
//console.log(isValid);



/*************** Part 1: Math Problems *************************/

//Check if all numbers are divisible by 5. Cache the result in a variable.
let result = false;
if ((n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0) && (n5 % 5 == 0)) {
    result = true;
}
console.log(result);

//Check if the first number is larger than the last. Cache the result in a variable.
let result1 = false;
if (n1 > n4) {
    result1 = true;
}
console.log(result1);
//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.
let result2 = n1 - n2;
result2 = result2 * n3;
result2 = result2 / n4;
console.log(result2);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isLess25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isLess25);

//Use string concatenation or template literals to format the outputs in a reasonable way.
console.log(`All four numbers are not divisible by 5 as it resulted "${result}"
First number n1 is not greater than n4, as the result of this is "${result1}"
After performing given arthematic chain of operations, final result is "${result2}"
Yes, all numbers are less than 25, the expression check resulted "${isLess25}"`)



/*************** Part 2: Math Problems *************************/


