const reverseString = (str) => {
  let reversedString = '', n = str.length - 1;
  while(n >= 0) {
    reversedString += str[n];
    n--;
  }
  return reversedString
};

export default reverseString;
