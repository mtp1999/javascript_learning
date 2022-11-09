const first_name = 'Jack';
const last_name = 'Sparrow';
const age = 40;
const str1 = "hello im 41 and im not Happy."

var variable1;


variable1 = first_name + last_name;
console.log(variable1)


// append
variable1 = "web ";
variable1 += "prog";
console.log(variable1);


// using variable in a sentence

variable1 = `hello my firstname is ${first_name} and my lastname is ${last_name}`;
console.log(variable1);


// length

variable1 = first_name.length;
console.log(variable1);


// concat()

variable1 = first_name.concat(' ', last_name);
console.log(variable1);


// change case

variable1 = first_name.toUpperCase();
console.log(variable1);

variable1 = first_name.toLowerCase();
console.log(variable1);


// slice

variable1 = first_name[3];
console.log(variable1);


variable1 = first_name.indexOf('c');
console.log(variable1);


variable1 = first_name.substring(0, 2);
console.log(variable1);


variable1 = first_name.slice(0, 2);
console.log(variable1);

// last word
variable1 = first_name.charAt(first_name.length - 1);
console.log(variable1);

// split

variable1 = str1.split(' ');
console.log(variable1);

// replace

variable1 = str1.replace('41', '88');
console.log(variable1);

// include

variable1 = str1.includes('41');
console.log(variable1);