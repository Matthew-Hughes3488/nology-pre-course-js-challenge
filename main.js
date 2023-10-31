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
    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3))
        throw "Invalid arguments";

    return Math.max(num1, num2, num3);
}

// Challenge 4
const getLastName = (names) => {
    if(!isArrayOfStrings(names))
        throw "Invalid input";
    
    lastIndex = names.length - 1;
    return names[lastIndex];
}

// Challenge 5
const allNumbersPositive = (numbers) => {
    for(num of numbers){
        if(num < 0) 
            return false;
    }

    return true;
} 

console.log(allNumbersPositive([5, -10, 15, 20]));


// input validation function
function isNumber(input) {
    return (typeof input === 'number');
}

function isArrayOfStrings(input){
    for(i of input){
        if(!(typeof i === 'string'))
            return false;
    }
    return true;
}





