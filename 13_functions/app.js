// function declaration

console.log(func1(33));

function func1(a) {
    return a
};


// function expression

const func2 = function(a, b) {
    return a + b
};

console.log(func2(6, 8));


// arrow function

const func3 = (x, y) => x + y;

console.log(func3(6, 100));


// immidiatley invokable function expression - iife
(function() {
    console.log("iife!!!!!!!!!!!!!")
})();


(function(name) {
    console.log("hello " + name)
})("Ali");