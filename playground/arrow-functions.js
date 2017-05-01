var square = x => x*x;

//console.log(square(9));

var user = {
    name: "Igor",
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`); //return the undefined
    },
    sayHyAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`); //return the name
    }
};

user.sayHyAlt(1,2,3);