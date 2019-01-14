// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here


const truthy = {
  field: true
}

const falsey = {
  field: false
}

const falseyTest = {
  field: true,
  fieldObject: falsey
}

const truthyTest = {
  field: true,
  fieldObject: truthy
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

console.log("Object with falsey child:")
console.log(hasFalsyValue(falseyTest))
console.log()

console.log("Object with truthy child:")
console.log(hasFalsyValue(truthyTest))
