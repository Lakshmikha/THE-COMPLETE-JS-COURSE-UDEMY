// ASSIGNMENT 1 - VALUES AND VARIABLE 

const country = "India";
const continent = "Asia";
const population = 10;

/* console.log(country);
console.log(continent);
console.log(population); */

// ASSIGNMENT 2 - DATA TYPES

const isIsland = false;
/*let language;

console.log(typeof country);
console.log( typeof isIsland);
console.log(typeof population);
console.log(typeof language);*/


// ASSIGNMENT 3 - LET, CONST AND VAR

const language = 'english';
/* const myCountry = "India";
const myContinent = "Asia";
const myIsIsland = false;
isIsland = true;


// ASSIGNMENT 4 - BASIC OPERATORS

console.log(population/2);
population++;
console.log(population);
const finlandPop = 6;
console.log(population>finlandPop);
const avgPop = 33;
console.log(population<avgPop);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language ;
// console.log(description);


// ASSIGNMENT 5 - TEMPERATE LITERALS

const description = `${country} is in ${continent}, and its ${population} million people speak ${language} !`
console.log(description)

// ASSIGNMENT 6 - TAKING DECISIONS
// const population = 10;
if (population>33) {
    console.log(`${country}'s population is above average`);
} else{
    console.log(`${country}'s population is ${33 - population} below average`);
} 


// ASSIGNMENT 7 - EQUALITY OPERATORS
// tried with '==' (loose)
// tried with '===' (strict)
// used Number()
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log("More than 1 border.");
} else {
    console.log("No border.");
} 

// ASSIGNMENT 8 - LOGICAL OPERATORS
const country = "India";
const continent = "Asia";
const population = 10;
const language = 'English';
const isIsland = false; 

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else{
    console.log(`${country} does not meet your criteria.`);
}

// CODING CHALLENGE FOR SWITCH STATEMENT
const day = 'day';

if (day === 'monday') {
    console.log("Plan course structure.");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos.");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples.");
} else if (day === 'friday'){
    console.log("Record videos.");
} else if (day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend");
} else{
    console.log("Not a valid day!");
} 

// ASSIGNMENT 9 - SWITCH STATEMENT
switch(language){
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers.");
        break;
    case 'spanish':
        console.log("2nd place in number of speakers.");
        break;
    case 'english':
        console.log("3rd place.");
        break;
    case 'hindi':
        console.log("Number 4");
        break;
    case 'arabic':
        console.log("5th most spoken language.");
        break;
    default:
        console.log("Great language too :D"); 
} */

// ASSIGNMENT 10 - THE TERNARY OPERATOR
console.log(`${country}'s population is ${population>33 ? 'above' : 'below'} average.`);