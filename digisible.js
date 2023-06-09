/*
Problem the digisible must be following conditions
(1) It is written with all different numbers
(2) None of the digits is zero
(3) it is divisible by each of its digits
Note.
You can expect input “n” to be a positive integer no greater than 10000. No need to validate the input.

Solving
- return false if number greater than 10k
- convert type to array
- if condition check all different numbers if true return false 
- if condition check number includes 0 return false
- if condition check parameter number divisible each digit equal zero or not
- return true

Test
*/

function isDigisible(number) {
  // return true if digisible, false otherwise.

  if (number >= 10000) {
    return false
  }

  let digits = String(number).split("").map(Number);
  let duplicateNumber = new Map();


  for (let i = 0; i < digits.length; i++) {
    let current = digits[i];
    if (duplicateNumber.has(current)) {
      duplicateNumber.set(current, duplicateNumber.get(current) + 1);
    } else {
      duplicateNumber.set(current, 1);
    }
    if (duplicateNumber.get(current) >= 2) {
      return false;
    }
  }

  if (digits.includes(0)) {
    return false
  }

  for (const digit of digits) {
    if (number % digit !== 0) {
        return false
    }
  }

  return true

}

console.log(isDigisible(12));
