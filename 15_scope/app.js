// global scope

var a = 1;
let b = 2;
const c = 3;


function func1() {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`in func1 a,b,c : ${a},${b},${c}`);

}

func1();

console.log(`in global a,b,c : ${a},${b},${c}`);




// if change the var
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`in if a,b,c : ${a},${b},${c}`);
}


console.log(`in global a,b,c : ${a},${b},${c}`);



// for 


for (let b = 0; b < 5; b = b + 1) {
    console.log("for runnung!!!!")
};

console.log(`in global a,b,c : ${a},${b},${c}`);