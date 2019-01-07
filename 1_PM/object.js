// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here


const test1 = {
  field: false
}


const hasFalsyValue = obj => {
  for (var property in obj) {
    let value = obj[property]
    if (typeof(value) === 'object') {
      return hasFalsyValue(value)
    }
    
    if (!value) {
      return true;
    }

  }
  return false;
};


console.log(hasFalsyValue(test))
