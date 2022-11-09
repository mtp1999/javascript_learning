// addEventListener

document.querySelector(".btn").addEventListener("click", function(e) {
    console.log("HIIIIII");
    e.preventDefault();
});



document.querySelector("#head1").addEventListener("click", hover_head1);

function hover_head1(e) {
    let head1 = document.querySelector("#head1");
    head1.style.opacity = 0.5;

    // event object
    console.log(e);

    // event object target
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);

    // event type
    console.log(e.type);
};