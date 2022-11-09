// single selectors

// document get element by id
console.log(document.getElementById("head1"));


// get things from element
console.log(document.getElementById("head1").id);
console.log(document.getElementById("head1").className);


// change things for an element

let head1 = document.getElementById("head1");
head1.style.backgroundColor = "black";
head1.style.color = "white";
// head1.style.display = "none";


// change content
head1.textContent = "HEAD ONE!!!!!!!!";
// head1.innerText = "HEAD ONE!!!!!!!!";
// head1.innerHTML = "<span>THIS IS SPAN!!</span>"



// document query selector (it behaves like css in selecting)
console.log(document.querySelector("div"));
console.log(document.querySelector("#head1"));
console.log(document.querySelector(".boxes"));
console.log(document.querySelector(".boxes").className);


// change things for an element
document.querySelector(".boxes").style.backgroundColor = "green";