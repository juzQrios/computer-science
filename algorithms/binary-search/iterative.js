const iterativeBinarySearch = (array, target) => {
  let low = 0, high = array.length - 1, mid;
  while ( high >= low ) {
    mid = Math.round((low + high)/2);
    if(array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1
    }
  }
  return -1;
};

export default iterativeBinarySearch;
