// create element

let my_h1 = document.createElement("h1");
my_h1.style.padding = "1rem";
my_h1.style.backgroundColor = "lightgray";
my_h1.style.margin = "1rem";
my_h1.appendChild(document.createTextNode("This is my h1."));
console.log(my_h1);


let my_div = document.createElement("div");
my_div.className = "boxes";
my_div.appendChild(document.createTextNode("This is my div."));
console.log(my_div);
my_h1.appendChild(my_div);


document.querySelector("body").appendChild(my_h1);