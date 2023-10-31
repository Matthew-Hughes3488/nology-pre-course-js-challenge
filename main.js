// Challenge 1
const isNumberPositive = (num) => {
  if (!(typeof num === "number")) 
    throw "Invalid argument";

  if (num < 0) 
    return -1;
  else 
    return 1;
};

// Challenge 2
const convertDaysToAge = (days) => {
    if (!(typeof days === "number")) 
        throw "Invalid argument";

    return Math.floor(days/365);
}





