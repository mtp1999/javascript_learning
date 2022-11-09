// Set ==> stores unique, any types


const set1 = new Set();


set1.add(21);
set1.add(true);
set1.add([1, 4]);
set1.add({ a: "hello" });

console.log(set1);


// another defining

const set2 = new Set([1, 3, "hiiii"]);
console.log(set2);


// methods

console.log(set1.size);

console.log(set1.has(22));
console.log(set1.has(21));


set1.delete(true);
console.log(set1);


set1.clear();
console.log(set1);