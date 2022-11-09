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
    clear_button.addEventListener('click', delete_all_tasks);

    // search tasks
    search_form.addEventListener('submit', search_tasks);

    // show all tasks
    show_all_tasks_button.addEventListener('click', show_all_tasks);

    // event is implemented everytime page is loaded
    document.addEventListener('DOMContentLoaded', show_all_tasks);
}

function show_all_tasks(e) {
    clear_all_tasks(e);
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {

        tasks = JSON.parse(localStorage.getItem("tasks"));

        for (let i = 0; i < tasks.length; i = i + 1) {
            create_task_element(tasks[i], i);
            task_list.children[i].classList.remove("display_none");
        }
    }

    e.preventDefault();
}

function create_task_element(task, index) {
    let span_index = document.createElement("span");
    let li = document.createElement("li");
    let i = document.createElement("i");
    let span_task = document.createElement("span");

    i.className = "fa fa-close";

    span_index.appendChild(document.createTextNode(index));
    span_task.appendChild(document.createTextNode(task));
    li.appendChild(span_index);
    li.appendChild(span_task);
    li.appendChild(i)
    task_list.appendChild(li);
}

function add_task(e) {
    let task = input_task.value.trim();

    if (task === '') {
        alert("You must define your task before add it!");
    } else {
        add_task_to_local_storage(task);
        show_all_tasks(e);
    }

    input_task.value = '';

    e.preventDefault();


}


function remove_task(e) {
    if (e.target.classList.contains("fa")) {
        if (confirm("Are you sure about removing the task?")) {

            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let index = Number(e.target.parentElement.children[0].innerText);

            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            show_all_tasks(e);

        }
    }
}


function search_tasks(e) {

    show_all_tasks(e);
    let input_search_value = input_search.value;

    for (let i = 0; i < task_list.children.length; i = i + 1) {
        if (task_list.children[i].children[1].innerText.search(input_search_value) == -1) {
            console.log(task_list.children[i].children[1].innerText)
            task_list.children[i].classList.add("display_none");
        }
    }


    e.preventDefault();
}


function add_task_to_local_storage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// just clear tasks in html
function clear_all_tasks(e) {
    task_list.innerHTML = '';
    e.preventDefault();
}

function delete_all_tasks(e) {
    task_list.innerHTML = '';
    localStorage.removeItem("tasks");
    e.preventDefault();
}