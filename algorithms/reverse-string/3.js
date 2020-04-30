const reverseString = (str) => {
  str = str.split('');
  let low = 0, high = str.length - 1;
  while ( low < high ) {
    let tmp = str[low];
    str[low] = str[high];
    str[high] = tmp;
    low += 1;
    high -= 1;
  }
  return str.join('');
};

export default reverseString;
