// multi selector

// document get element by className
let boxes = document.getElementsByClassName("boxes");
console.log(boxes);
console.log(boxes[0]);

// change for an element or elements
boxes[0].style.backgroundColor = "lightgreen";


// find specific tags with specific className
boxes = document.querySelector("div").getElementsByClassName("boxes");


// document get element by tag name

let divs = document.getElementsByTagName("div");
console.log(divs);

// quary selector all 

divs = document.querySelectorAll("div");
console.log(divs);