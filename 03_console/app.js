// Comment


/*
multi line
comment
*/


// log to console
console.log("hello world");

console.log(123);

console.log(true);
console.log(false);

var myvariable = "Hiiii";
console.log(myvariable);


// array

console.log([1, 2, 3]);
console.table([1, 2, 3]);


// object
console.log({ a: 1, b: 'mojo' });
console.table({ a: 1, b: 'mojo' });


// error
console.error('this is an error');


// clear the console
// console.clear()


// warning
console.warn("this is a warning");


// calculate the time of executing some codes

console.time('mytime');
console.log('blah');
console.log('blah');
console.log('blah');
console.log('blah');
console.timeEnd('mytime');