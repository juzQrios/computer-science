const selectionSort = (array) => {
  let minIndex;
  for(let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if(i != minIndex) {
      swap(array, i, minIndex);
    }
  }
  return array;
};

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

export default selectionSort;
