// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]


const arr = [0, 1, 2, 3, 4];

const triple = (x) => {
  return x * 3
};

Array.prototype.map = function(fun) {
  
  let newArr = []
  for (let el of this) {
    newArr.push(fun(el))
  }

  return newArr

};

console.log(arr.map(triple));
