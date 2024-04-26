let nameAuthor = prompt("Please enter Author name");
let nameQuote;
while (nameAuthor === null || nameAuthor === "" ) {
    nameAuthor = prompt("Cannot continue without a name");
}
do {
    nameQuote = prompt("Please enter a quote");
} while (nameQuote === null || nameQuote === "" )
alert(nameAuthor  + " says \"" + nameQuote + "\" ");