// IF/ELSE CHALLENGE 

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBmi = markWeight / (markHeight ** 2); 
const johnBmi = johnWeight / (johnHeight ** 2); 

if (markBmi > johnBmi){
    console.log(`Mark's BMI (${markBmi}) is greater than John's BMI (${johnBmi})!`);
} else {
    console.log(`John's BMI (${johnBmi}) is greater than Mark's BMI (${markBmi})!`);
}