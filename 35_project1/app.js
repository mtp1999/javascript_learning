// select elements
let add_form = document.getElementById("add_form");
let input_task = document.querySelector("#add_form input[type=text]");
let search_form = document.querySelector("#search_form");
let input_search = document.querySelector("#search_form input[type=text]");
let task_list = document.querySelector("#tasks ul");
let show_all_tasks_button = document.querySelector("#show_all_tasks_button");
let clear_button = document.querySelector("#clear_button");


load_event_listeners();


function load_event_listeners() {

    // add task
    add_form.addEventListener('submit', add_task);

    // remove a specific task
    task_list.addEventListener('click', remove_task);

    // clear all tasks
    clear_button.addEventListener('click', clear_all_tasks);

    // search tasks
    search_form.addEventListener('submit', search_tasks);

    // show all tasks
    show_all_tasks_button.addEventListener('click', show_all_tasks);
}


function add_task(e) {
    let input_task_value = input_task.value.trim();

    if (input_task_value === '') {
        alert("You must define your task before add it!");
    } else {

        let li = document.createElement("li");
        let i = document.createElement("i");
        let span = document.createElement("span");

        i.className = "fa fa-close";

        span.appendChild(document.createTextNode(input_task_value));
        li.appendChild(span);
        li.appendChild(i)
        task_list.appendChild(li);
    }

    input_task.value = '';

    e.preventDefault();


}


function remove_task(e) {
    if (e.target.classList.contains("fa")) {
        if (confirm("Are you sure about removing the task?")) {
            e.target.parentElement.remove();
        }
    }
}

function clear_all_tasks(e) {
    task_list.innerHTML = '';
    e.preventDefault();
}


function search_tasks(e) {
    let input_search_value = input_search.value;
    console.log(input_search_value)

    for (let i = 0; i < task_list.children.length; i = i + 1) {
        if (task_list.children[i].children[0].innerText.search(input_search_value) == -1) {
            console.log(task_list.children[i].children[0].innerText)
            console.log(task_list.children[i])
            task_list.children[i].classList.add("display_none");
        }
    }


    e.preventDefault();
}


function show_all_tasks(e) {

    for (let i = 0; i < task_list.children.length; i = i + 1) {

        task_list.children[i].classList.remove("display_none");
    }


    e.preventDefault();
}