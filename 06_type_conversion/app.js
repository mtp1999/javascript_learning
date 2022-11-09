// number to string
let variable1;

variable1 = String(555);
console.log(variable1);
console.log(typeof variable1);
console.log(variable1.length);

// boolean to string
variable1 = String(true);
console.log(variable1);
console.log(typeof variable1);
console.log(variable1.length);


// date to string
variable1 = String(new Date());
console.log(variable1);
console.log(typeof variable1);
console.log(variable1.length);

// array to string
variable1 = String([1, 2, 3]);
console.log(variable1);
console.log(typeof variable1);
console.log(variable1.length);


// toString()
variable1 = (5).toString();
console.log(variable1);
console.log(typeof variable1);
console.log(variable1.length);


// string to number
variable1 = Number('3333');
console.log(variable1);
console.log(typeof variable1);


// boolean to number
variable1 = Number(true);
console.log(variable1);
console.log(typeof variable1);

variable1 = Number(false);
console.log(variable1);
console.log(typeof variable1);


// null to number
variable1 = Number(null);
console.log(variable1);
console.log(typeof variable1);


// parseInt(), parseFloat()
variable1 = parseInt('100.15');
console.log(variable1);
console.log(typeof variable1);

variable1 = parseFloat('100.15');
console.log(variable1);
console.log(variable1.toFixed(3));
console.log(typeof variable1);