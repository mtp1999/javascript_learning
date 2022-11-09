// Map ==> key-value pairs ==> can use any type as key or value


const person = new Map();


person.set('p1', {
    fname: "jack",
    lname: "sparrow"
});


person.set(2, "morgan");


console.log(person.size);


console.log(person);
console.log(person.get(2));
console.log(person.get('p1'));


person.delete('p1');
console.log(person);



console.log(person.has(2));


person.clear()
console.log(person);