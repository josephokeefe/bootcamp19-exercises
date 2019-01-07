// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  return el%7 == 0
};

Array.prototype.filter = function(fun) {

  let result = []

  for (let el of this) {
    if(fun(el) && Number.isInteger(el)) {
      result.push(el)
    }
  }

  return result

};

const newArr = arr.filter(multOf7);

console.log(newArr);
