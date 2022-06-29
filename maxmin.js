let arr = [];

function getArr() {
  const stringArr = prompt(
    "Enter a list of numbers separated by commas:"
  ).split(",");
  arr = stringArr.map((element) => {
    return parseInt(element);
  });
}

function maxAndMin(array) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  const maxAndMin = [min, max];
  console.log(maxAndMin);
}
getArr();
maxAndMin(arr);
