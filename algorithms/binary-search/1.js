const binarySearch = (array, target) => {
  let min = 0, max = array.length - 1, mid;
  while ( max >= min ) {
    mid = Math.round((min + max)/2);
    if(array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1
    }
  }
  return -1;
};

export default binarySearch;
