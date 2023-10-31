// Challenge 1
const isNumberPositive = (num) => {
  if (!(isNumber(num))) 
    throw "Invalid argument";

  if (num < 0) 
    return -1;
  else 
    return 1;
};

// Challenge 2
const convertDaysToAge = (days) => {
    if (!(isNumber(num))) 
        throw "Invalid argument";

    return Math.floor(days/365);
}

// Challenge 3
const getLargestNumber = (num1, num2, num3) => {
    if (!(isNumber(num1)) || !(isNumber(num2)) || !(isNumber(num3)))
        throw "Invalid arguments";

    return Math.max(num1, num2, num3);
}

console.log(getLargestNumber(65, 10, 15));

// Challenge 4

// input validation function
function isNumber(num) {
    return (typeof num === 'number');
}





