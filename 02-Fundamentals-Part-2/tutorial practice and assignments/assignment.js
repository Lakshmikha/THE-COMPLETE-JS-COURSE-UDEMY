// ASSIGNMENT 1 - FUNCTIONS

'use strict';

/* function describeCountry(country, population, capitalCity) {
    const theCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return theCountry;
}

const country1 = describeCountry('Finland', 6, 'Helsinki');
const country2 = describeCountry('India', 10, 'Delhi');
const country3 = describeCountry('Japan', 5, 'Tokyo');
console.log(country1);
console.log(country2);
console.log(country3); 

// improvemnts
// can use return '${country} has ${population} million people and its capital city is ${capitalCity}`; instead of storing it in a variable.

// ASSIGNMENT 2 - FUNCTION DECLARATIONS


function percentageOfWorld1(population){  //function declaration
    const partOfWorld = (population/7900)*100 + '%';
    return partOfWorld;
}

const countryPopulation1 = console.log(percentageOfWorld1(1441));
const countryPopulation2 = console.log(percentageOfWorld1(10));
const countryPopulation3 = console.log(percentageOfWorld1(18)); 

const percentageOfWorld2 = function (population){    //anonymous function
    const partOfWorld = (population/7900)*100 + '%';
    return partOfWorld;
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(10));
console.log(percentageOfWorld2(18));

// ASSIGNMENT 3 - ARROW FUNCTIONS
const percentageOfWorld1 = population => (population/7900)*100 + '%';

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(10));
console.log(percentageOfWorld1(18)); 

// ASSIGNMENT 4 - FUNCTIONS CALLING OTHER FUNCTIONS
// const percentageOfWorld1 = population => (population/7900)*100 + '%';
const describePopulation = (country, population)=>{
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`
}

console.log(describePopulation('China',1441));
console.log(describePopulation('India',10));
console.log(describePopulation('Russia',144)); 


// ASSIGNMENT 5 - ARRAYS
const percentageOfWorld1 = population => (population/7900)*100 + '%';
const populations = [1441, 10, 18, 144];
console.log(populations.length === 4);
const percentages = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
];
console.log(percentages); 

// ASSIGNMENT 6 - METHODS
const neighbours = ['China', 'Nepal', 'Bhutan', 'Sri Lanka'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Nepal')] = 'Pakistan';
console.log(neighbours); 

// ASSIGNMENT 7 - OBJECTS
const myCountry = {
    country : 'India', 
    capital : 'New Delhi', 
    language : 'Hindi', 
    population : 7, 
    neighbours : ['China', 'Nepal', 'Bhutan', 'Sri Lanka'] 
}; 

// CHALLENGE - DOT VS BRACKET
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friend : ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friend.length} and his best friend is ${jonas.friend[0]}`); 

// CHALLENGE - OBJECT METHODS
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friend : ['Michael', 'Peter', 'Steven'],
    hasDriverLicence : true,
    getSummary : function() {
        const jonasIntro= `${this.firstName} is a ${this.age} year-old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'no'} driver's license.`;
        return jonasIntro;
    }
    }

console.log(jonas.getSummary()); 

// ASSIGNMENT 8 - DOT VS BRACKET
const myCountry = {
    country : 'India', 
    capital : 'New Delhi', 
    language : 'Hindi', 
    population : 7, 
    neighbours : ['China', 'Nepal', 'Bhutan', 'Sri Lanka'] 
}; 

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population); 


// ASSIGNMENT 9 - OBJECT METHODS
const myCountry = {
    country : 'India', 
    capital : 'New Delhi', 
    language : 'Hindi', 
    population : 7, 
    neighbours : ['China', 'Nepal', 'Bhutan', 'Sri Lanka'] ,
    describe : function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
        and a capital called ${this.capital}.` }, 
    checkIsIsland : function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
    };

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland()); 

// ASSIGNMENT 10 - FOR LOOP
for (let voter = 1; voter <= 50; voter++ ) {
    console.log(`Voter number  ${voter} is currently voting.`);
} 

// ASSIGNMENT 11 - LOOPING ARRAYS, BREAK AND CONTINUE
const populations = [1441, 10, 18, 144];
const percentages2 = [];

for(let i = 0 ; i < populations.length ; i++) {
     percentages2.push((populations[i]/7900)*100 + '%');
} 
console.log(percentages2); 

// ASSIGNMENT 12 - LOOPING BACKWARDS, LOOPS IN LOOPS
const listOfNeighbours = [['Canada','Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbours : ${listOfNeighbours[i][j]}`);
    }
} */

// ASSIGNMENT 13 - WHILE LOOP
const populations = [1441, 10, 18, 144];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push((populations[i]/7900)*100 + '%');
    i++;

}
console.log(percentages3);