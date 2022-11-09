// if(something){
//     do something
// }else{
//     do something else
// }


const num1 = 60;
const num2 = 10;
const str1 = '60';



// check value
if (num1 == 60) {
    console.log(true);
} else {
    console.log(false);
};


if (num1 != 60) {
    console.log(true);
} else {
    console.log(false);
};


// check value and type


if (str1 === 60) {
    console.log(true);
} else {
    console.log(false);
};


if (str1 !== 60) {
    console.log(true);
} else {
    console.log(false);
};


// bigger or smaller

if (num1 >= 60) {
    console.log(true);
} else {
    console.log(false);
};

if (num1 < 60) {
    console.log(true);
} else {
    console.log(false);
};

// logical operators

// and
if (num1 > 50 && num2 < 20) {
    console.log(true);
} else {
    console.log(false);
};


// or
if (num1 > 50 || num2 > 20) {
    console.log(true);
} else {
    console.log(false);
};


// ternary operator
console.log(num1 === 60 ? "yes" : "no");