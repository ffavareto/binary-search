function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  
  return -1;
}

module.exports = { search };

const result = search([76, 543, 2123, 4567], 2123);
console.log(result);