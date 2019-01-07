const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words

  return str.split(" ")

};

console.log(tokenize("joe is my name"))

const reverse = str => {
  // TODO - write a function which reverses the string

  let chars = []

  for (let i = 0; i < str.length; i++) {
    chars.push(str[str.length - i - 1])
  }

  return chars.join("")

};

console.log(reverse("joe"))

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  
  let popArr = []

  for (let i = 0; i < arr.length; i++) {

    const index = arr.indexOf(arr[i])

    if (i !== index) {
      console.log(i)
      arr.splice(i, 1)
      i -= 1
    }

  }

  return arr

};

console.log(uniqueOnes(tokenize("joe bill joe tom tom tom percy")))

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer

  if (num >= 1) {
    return num*factorial(num-1)
  }
  else {
    return 1
  }

};

console.log(factorial(4))

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  if (arr1.length !== arr2.length) {
    return -1
  }
  else {
    let zipped = []

    for (let i = 0; i < arr1.length; i++) {
        zipped.push([arr1[i], arr2[i]])
    }

    return zipped
  }

};

console.log(zip([1, 2, 3], [5, 3, 1]))

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`

  let arr1 = []
  let arr2 = []

  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  
  return [arr1, arr2]

};

console.log(unzip(zip([1, 2, 3], [5, 3, 1])))

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"

  let newOrder = []

  for (let i = 0; i < str.length; i++) {
    newOrder.push(str[(i + num - 1)%str.length])
  }

  return newOrder.join("")

};

console.log(shiftRight("Hello", 3))



var th = ['','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    var n = s.split(''); 
    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }

    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }

    let arr = str.replace(/\s+/g,'-')

    return arr.slice(0, arr.length - 1);
}

console.log(toWords(43))

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."

  const today = new Date();
  const dd = today.getDate();

  const mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();

  const hr = today.getHours() % 13

  const min = today.getMinutes()

  const months = ['January', 'February', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let time = " in the "

  if (today.getHours() >= 12)
  {
    time = time + "afternoon."
  }
  else
  {
    time = time + "morning."
  }

  return "Today\'s date is " + months[mm - 1] + " " + dd + ", " + yyyy + ". It is " + toWords(hr) + " " + toWords(min) + time

};

console.log(announceDate())

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
