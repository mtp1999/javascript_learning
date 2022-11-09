// set local storage item (must set as string only)
// to see local storage items, in inspect element, go to application section
localStorage.setItem("first_name", "Jack");


// remove from local storage
// localStorage.removeItem('first_name');


// get item from local storage
let first_name = localStorage.getItem('first_name');
console.log(first_name);


// set session storage items
sessionStorage.setItem('age', '45');


// clear local storage
// localStorage.clear();


document.querySelector("form").addEventListener("submit", function(e) {
    let input = document.querySelector("input[type=text]").value;
    console.log(input);

    e.preventDefault();
});



// use JSON.parse and JSON.stringify
// use array as value and a key for saving in local storage
document.querySelector("form").addEventListener("submit", function(e) {

    let input = document.querySelector("input[type=text]").value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(input);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task saved.');

    e.preventDefault();
});