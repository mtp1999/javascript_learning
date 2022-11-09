// Replace

// get old element
let old_header = document.getElementById("head1");
console.log(old_header);

// get the parent of old element
let parent = old_header.parentElement;
console.log(parent)


// create new element
let new_header = document.createElement("h3");
new_header.appendChild(document.createTextNode("This is new Head."));
new_header.style.padding = "1rem";
new_header.style.margin = "1rem";
new_header.style.backgroundColor = "lightgray";
console.log(new_header);


// replace the old one to the new one
parent.replaceChild(new_header, old_header);


// Remove an element

let boxes = document.getElementsByClassName("boxes");
boxes[1].remove();