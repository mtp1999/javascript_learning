// event types

let btn = document.querySelector("#btn");

// click
btn.addEventListener("click", event_type);


// double click 
// btn.addEventListener("dblclick", event_type);


// mouse down
// btn.addEventListener("mousedown", event_type);


// mouse up
// btn.addEventListener("mouseup", event_type);


// mouse enter
// btn.addEventListener("mouseenter", event_type);


// mouse leave
// btn.addEventListener("mouseleave", event_type);


// mouse move
// btn.addEventListener("mousemove", event_type);


function event_type(e) {
    console.log(e.type);
    e.preventDefault();
};