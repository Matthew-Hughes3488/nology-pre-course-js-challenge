// Challenge 1
const isNumberPositive = (num) => {
  if (!(typeof num === "number")) 
    throw "Invalid argument";

  if (num < 0) 
    return -1;
  else 
    return 1;
};

