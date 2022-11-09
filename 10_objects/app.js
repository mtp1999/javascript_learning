const person = {
    first_name: "Jack",
    last_name: "Sparrow",
    age: 40,
    email: "jack.sparrow@gmail.com",
    hobbies: ['badminton', 'music'],
    address: {
        town: "new york",
        street: "flower st"
    },
    birth_date: function() {
        return 2022 - this.age
    },
}


var variable1;


variable1 = person;
console.log(variable1);


// get specific value
variable1 = person.first_name;
console.log(variable1);

variable1 = person["last_name"];
console.log(variable1);


variable1 = person.birth_date();
console.log(variable1);