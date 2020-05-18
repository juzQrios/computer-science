const recursiveBinarySearch = (array, target, low = 0, high = array.length - 1) => {
  if(low > high) {
    return -1;
  }
  const mid = Math.round((low + high)/2);
  if(array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return recursiveBinarySearch(array, target, low, mid - 1);
  } else {
    return recursiveBinarySearch(array, target, mid + 1, high);
  }
}

export default recursiveBinarySearch;
