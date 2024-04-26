// Function to prompt user for input
function promptInput(promptMessage) {
    return prompt(promptMessage);
}

// Function to display input string and its length
function displayStringLength(inputString) {
    console.log("Input String: " + inputString);
    console.log("Number of Characters: " + inputString.length);
}

// Main function
function main() {
    // Prompt user for input string
    let inputString = promptInput("Enter a string:");

    // Display input string and its length
    displayStringLength(inputString);
}

// Call the main function to start the program
main();
