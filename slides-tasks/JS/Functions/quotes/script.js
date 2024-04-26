function promptAuthor() {

    let author = prompt("Please enter author:");
    if (author === "") {
        alert("Author field cannot be empty. Please try again.");
    }
    else {
        promptQuote(author);
    };

}

function promptQuote(author) {
    let quote = prompt("Please enter quote:");
    if (quote === "") {
        alert("Quote field cannot be empty. Please try again.");
        promptQuote(author);
    } else {
        alert(author + " says: \"" + quote + "\""); 
        askToRepeat();
    };
};
function askToRepeat() {
    let again = confirm("Do you want to enter another quote?");
    if (again) {
        promptAuthor();
    } else { alert("Thank you for using the quote generator!"); }
}
promptAuthor();
