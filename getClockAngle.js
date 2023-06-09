/*
Problem calculate the shorter clock angel between hour and minute

Solving
- declare two variable to store hour&minute convert type hh_mm parameter to array and convert string to Number
- formula
    hour -> hour * 30 + minute * 0.5
    minute -> minute * 6
- calculate hour minus minute
- find less result
- return result

Test
*/

function getClockAngle(hh_mm) {
  const [hours, minutes] = hh_mm.split(":").map(Number);

  const hour = hours * 30 + minutes * 0.5;

  const minute = minutes * 6;

  let result = hour - minute;
  result = Math.min(result, 360 - result);

  return result;
}

console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
