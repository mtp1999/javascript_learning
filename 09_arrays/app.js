// create some arrays

const numbers = [32, 2, 11, 55, 6677, 5, 99, -1, 100];

const numbers2 = new Array(11, 22, 77, 0);

const fruits = ['apple', 'banana', 'melon', 'orange'];

const mixed_array = ['apple', 11, [1, 2, 3], false];

var variable1;

// length

variable1 = numbers.length;
console.log(variable1);


// check if is array

variable1 = Array.isArray(numbers);
console.log(variable1);


// get single value

variable1 = numbers[3];
console.log(variable1);


// insert into array


numbers[2] = 2000;
console.log(numbers);



// find index

variable1 = numbers.indexOf(99);
console.log(variable1);


// append

numbers.push(3000);
console.log(numbers);


// prepend

numbers.unshift(4000);
console.log(numbers);

// delete the last member of the array

numbers.pop();
console.log(numbers);


// delete the first member of the array

numbers.shift();
console.log(numbers);


// splice values
// numbers.splice(1, 3);
// console.log(numbers);


// reverse
numbers.reverse();
console.log(numbers);

// concat to arrays

variable1 = numbers.concat(numbers2);
console.log(variable1);


// sort
// it has some problems
variable1 = numbers.sort();
console.log(variable1);


// use this instead

// sort from min to max
variable1 = numbers.sort(function(x, y) {
    return x - y
});
console.log(variable1);


// sort from max to min
variable1 = numbers.sort(function(x, y) {
    return y - x
});
console.log(variable1);