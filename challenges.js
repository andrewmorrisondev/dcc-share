/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}

/*-----------------------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(n) {
  return ++n
}

/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(...args) {
  if (args.some((arg) => isNaN(arg))) {
    return NaN
  } else {
    return args[0] + args[1]
  }
}

/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

function sumNumbers(nums) {
  return nums.reduce((prev, num) => prev + num, 0)
}

/*-----------------------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5
-----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList(...nums) {
  return nums.reduce((prev, num) => prev + num, 0)
}

/*-----------------------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend, and the second argument should be the divisor.
- If a 0 is passed in as the second argument, you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

function computeRemainder(a, b) { return b === 0 ? Infinity : a % b }

/*-----------------------------------------------------------------------------
Challenge: 06-range

Difficulty: basic

Prompt:

- Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
- The range function must be called with the first argument less than or equal to the second argument; otherwise, return the string "First argument must be less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:

function range(a, b) {
  const arr = []
  if (a > b) {
    return "First argument must be less than second"
  } else {
    for (i = a; i < b; i++) {
      arr.push(i)
    }
    return arr
  }
}

/*-----------------------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(str) {
  return str.split(``).map((char) => { return char.toUpperCase() }).reverse().join(``)
}

/*-----------------------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument, then returns a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

function removeEnds(str) {
  if (str.length < 3) { return `` }
  return str.split(``).splice(1, str.length - 2).join(``)
}

/*-----------------------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys representing the character with its value set to the number of times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount(str) {
  obj = {}
  strArr = str.split(``)
  strArr.forEach((char) => {
    if (char in obj) {
      obj[char] += 1
    } else {
      obj[char] = 1
    }
  })
  return obj
}

/*-----------------------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding(int, pad, length) {
  if (int.toString().length >= length) { 
    return int.toString() 
  } else {
    return formatWithPadding(pad + int, pad, length)
  }
}

/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

function isPalindrome(string) {
  // split, reverse, join to reverse string. split, join again to remove spaces
  const reversed = string.split(``).reverse().join(``).split(` `).join(``)
  // split, join to remove spaces
  const upString = string.split(` `).join(``)
  // compare strings and remove capitalization
  return upString.toLowerCase() === reversed.toLowerCase()
}

/*-----------------------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the differences between two strings of equal length. It is used in computer science for such things as implementing a "fuzzy search" capability.

- Write a function named hammingDistance that accepts two arguments, which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(str1, str2) {
  if (str1.length != str2.length) return NaN
  let count = str1.length
  const chars1 = [...str1]
  const chars2 = [...str2]
  chars1.forEach(char1 => {
    chars2.forEach(char2 => {
      if (char1 === char2) --count
    })
  })
  return count
}

/*-----------------------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg. Additionally, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..

Examples:

mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
  let out = []
  const arr = str.split(``)
  arr.forEach((el, idx) => {
    for (let i = 0; i <= idx; i++) {
      out.push(el)
    }
    out.push(`-`)
  })
  out.splice(-1, 1)
  return out.join(``)
}

/*-----------------------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite the previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:

function fromPairs(arr) {
  let obj = {}
  arr.forEach(pair => { obj[pair[0]] = pair[1] })
  return obj
}

/*-----------------------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty: Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1}); //=> {a: 1} ( returns a modified version of the 
                                        object passed into the function as 
                                        the first argument )
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}); //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44}); //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

function mergeObjects(...objs) {
  let outObj = objs.shift()
  objs.forEach(obj => {
    for (const key of Object.keys(obj)) { outObj[key] = obj[key] }
  })
  return outObj
}

/*-----------------------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty: Intermediate

Prompt:

- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array with the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- Do not mutate the array that is passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(arr) {
  let highest = 0, idxOf = 0
  arr.forEach((obj, idx) => {
    if (obj.price > highest) { highest = obj.price, idxOf = idx }
  })
  return arr[idxOf]
}

/*-----------------------------------------------------------------------------
Challenge: 17-mapArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg). For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element, and its index.
- Whatever is returned by the callback function should be included in the new array at current iteration's index.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6] (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------------------*/
// Your solution for 17-mapArray here:

function mapArray(arr, func) {
  return arr.map((el, idx) => func(el, idx))
}

/*-----------------------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg). For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument passed to reduceArray as the first argument when invoking the callback. For subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(arr, func, acc) {
  let out = acc
  arr.forEach((el, idx) => { out = func(out, el, idx) })
  return out
}

/*-----------------------------------------------------------------------------
Challenge: 19-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------------------*/
// Your solution for 19-isPrime here:

function isPrime(n) {
  if (n < 2 || n % 1 !== 0) return false
  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) return false
  }
  return true
}

/*-----------------------------------------------------------------------------
Challenge: 20-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are both arrays. The array arguments may contain any mixture of strings, numbers, or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 20-intersection here:

// function intersection(arr1, arr2) {
//   let intersections = []
//   arr1.forEach(el => {
//     if (arr2.includes(el)) { intersections.push(el)}
//   })
//   return intersections
// }

// REALLY WANTED TO JUST LEAVE THIS ^^
// AND GET BACK TO THE PROJECT LOL

function intersection(arr1, arr2) {
  const freq = {}
  const intersections = []

  arr1.forEach(el => {
    if (arr2.includes(el)) {
      freq[el] = (freq[el] || 0) + 1;
    }
  })

  arr2.forEach(el => {
    if (arr1.includes(el) && freq[el]) {
      intersections.push(el)
      freq[el]--
    }
  })

  return intersections
}

/*-----------------------------------------------------------------------------*/