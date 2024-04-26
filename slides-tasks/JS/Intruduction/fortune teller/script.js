let N = [...Array(11).keys()]; // Numbers from 0 to 10
let Z = ['John', 'Ivan', 'Riccardo']; // Partner's names
let Y = ['London', 'NY', 'China', 'India', 'Europe']; // Geographic locations
let X = ['homeless', 'businessman', 'housekeeper', 'manager', 'builder']; // Job titles

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let numberOfChildren = getRandomElement(N);
let partnerName = getRandomElement(Z);
let geographicLocation = getRandomElement(Y);
let jobTitle = getRandomElement(X);

alert(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
