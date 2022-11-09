// nodes

let head1 = document.getElementById("head1");
console.log(head1);

let boxes = document.getElementsByClassName("boxes");
console.log(boxes);

// childNodes
console.log(head1.childNodes);
console.log(head1.firstChild);
console.log(head1.lastChild);


// children
console.log(head1.children);
console.log(head1.children[0]);
console.log(head1.children[1]);
console.log(head1.firstElementChild);
console.log(head1.lastElementChild);
console.log(head1.childElementCount);


// get parent node
console.log(head1.parentNode);


// get parent element
console.log(head1.parentElement);
console.log(head1.parentElement.parentElement);


// get next or previous sibling
console.log(head1.nextSibling);
console.log(head1.previousSibling);


// get next or previous element sibling
console.log(head1.nextElementSibling);
console.log(head1.previousElementSibling);