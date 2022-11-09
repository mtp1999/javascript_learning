// for

for (let i = 0; i < 10; i = i + 2) {
    console.log("number is: " + String(i))
};


// while 

let j = 0;
while (j < 10) {
    console.log("number is: " + String(j));
    j = j + 1;
};


// do while

let i = 100;
do {
    console.log(i);
    i = i - 10;
}
while (i > 50);


// loop through array

const cars = ["ford", "benz", "bmw", "mazeratti"];

for (let i = 0; i < cars.length; i = i + 1) {
    console.log(cars[i]);
};

// forEach

cars.forEach(function(car) {
    console.log(car);
});


// map

cars.map(function(car) {
    console.log(car);
});


// for In loop

for (let i in cars) {
    console.log(i);
    console.log(cars[i]);
}