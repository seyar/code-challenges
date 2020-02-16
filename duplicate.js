function duplicate(arr) {
  return arr.reduce((acc, curr) => {
    return [...acc, ...[curr, curr]];
  }, [])
}
console.log(duplicate([1,2,3,4,5]));

function duplicate2(arr) {
  return [...arr, ...arr]
}
console.log(duplicate2([1,2,3,4,5]));
