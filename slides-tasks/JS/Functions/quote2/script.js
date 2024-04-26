function promptAuthor() {
    var author = prompt("Please enter the author's name:"); if (author === "") {
        alert("Author field cannot be empty. Please try again."); promptAuthor();
        // Call the function again recursively 
    } else {
        promptQuote(author);
        // Proceed to prompt for the quote 
    }
}
function promptQuote(author) {
    var quote = prompt("Please enter a quote by " + author + ":");
    if (quote === "") {
        alert("Quote field cannot be empty. Please try again.");
        promptQuote(author);
        // Call the function again recursively 
    } else {
        alert("Author: " + author + "\nQuote: " + quote); askToRepeat();
        // Ask if the user wants to repeat the process 
    }
}
function askToRepeat() {
    var again = confirm("Do you want to enter another quote?"); 
    if (again) {
        promptAuthor();
        // Start the process again if user confirms 
    } else { alert("Thank you for using the quote generator!"); }
}
// Start the process by prompting for the author's 
name promptAuthor();