// event types

let form = document.querySelector("form");
let input_text = document.querySelector("form input[type=text]");
let input_submit = document.querySelector("form input[type=submit]");


// submit
// form.addEventListener("submit", event_type);


// keydown 
// erase e.preventDefault();
// use e.target.value
// input_text.addEventListener("keydown", event_type);


// keyup
// input_text.addEventListener("keydown", event_type);


// keypress
// input_text.addEventListener("keypress", event_type);


// focus
// input_text.addEventListener("focus", event_type);


// blur
// input_text.addEventListener("blur", event_type);


// cut
// input_text.addEventListener("cut", event_type);


// paste
// input_text.addEventListener("paste", event_type);


// input
input_text.addEventListener("input", event_type);



function event_type(e) {
    console.log(e.type);
    // console.log(e.target.value);
    // e.preventDefault();
};