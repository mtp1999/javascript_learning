let a, b;
[a, b] = [100, 200];

console.log(a);
console.log(b);


// rest pattern in array

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

console.log(a);
console.log(b);
console.log(rest);



// rest pattern in object
({ a, b, ...rest } = { a: 1000, b: 2000, c: 3000, d: 4000 });

console.log(a);
console.log(b);
console.log(rest);


// array destructuring

const arr1 = ["abigail", "jack", "marry"];

const [person1, person2, person3] = arr1;

console.log([person1, person2, person3]);


// object destructuring

const person = {
    name: "Jack",
    id: 233334,
    age: 24
};


const { name, id, age } = person;

console.log(name, id, age);