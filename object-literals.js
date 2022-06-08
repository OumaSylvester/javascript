const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let waiter = {
    name: "Smith Jason",
    time: "12 - 6"
}

let restorant = {
    name: "Obra",
    location: "Moi University Main Cumpus",

    startMenu: ["Chapati", "Dengu", "Beans"],
    //ES6 object within object declaration
    waiter, //you just include the variable name to declare the waiter property with the waiter object literal.
    //ES6 method declaration
    order(starterIndex, mainIndex){ 
        return this.startMenu;
    },

    //you can also compute property names
    [weekdays[0]] : "Thusday",
    [weekdays[3]] : "Friday",
    ['day- ${2+4}'] : "Six" //check on this
}

//test the new ES6 ways of doing things
console.log(restorant.waiter);
console.log(restorant.order());
console.log(restorant);

//optional chaining
console.log(restorant.waiter.costume?.color); //returns undefined if property constume does not exist

//A protery exits if its not null or undefined

//Using optional chanining in methods
console.log(restorant.order?.() ?? "Method does not exits"); //calls the method order only if exits else returns the string.

//optional chaining on arrays
const users = [{name: "Jonas", email: "ouma@gmail.com"}];
console.log(users[0]?.name ?? "User array empty"); //get the name of the first user only if  the user  exits
