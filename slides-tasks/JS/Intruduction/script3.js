
let numbers= 123;
let strNumbers= "123";

console.log(numbers !== strNumbers);

let myAge= 25;
let userAge = +prompt ("Please enter your age");

if (myAge=== userAge){
    alert("You are as old as me");
}
else if (myAge>userAge){
    alert("You are younger");
}
else if(myAge<userAge){
    alert("You are older");
}
else {
    alert("Who are you?");
}
