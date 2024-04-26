


let myAge = 25;
let userAge = +prompt("Please enter your age");

if (myAge === userAge) {
    alert("You are as old as me");
}
else if (myAge > userAge && userAge>0) {
    alert("You are younger");
}
else if (myAge < userAge) {
    alert("You are older");
}
else if (isNaN(userAge)) {
    alert("You are older");
}
else {
    alert("Who are you?");
}
