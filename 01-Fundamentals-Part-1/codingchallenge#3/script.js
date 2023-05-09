/*// DATA 1

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const avgDolphinScore = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
const avgKoalaScore = (koalaScore1+koalaScore2+koalaScore3)/3;

console.log(`The average score of Dolphins is ${(dolphinScore1+dolphinScore2+dolphinScore3)/3}.`);
console.log(`The average score of Koalas is ${(koalaScore1+koalaScore2+koalaScore3)/3}.`);

if(avgDolphinScore > avgKoalaScore) {
    console.log("Therefore, the Dolphins are the winner!");

} else if(avgDolphinScore < avgKoalaScore) {
    console.log("Therefore, the Koalas are the winner!");

} else {
    console.log("It's a draw!");

}

// DATA 2

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 123;

const avgDolphinScore = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
const avgKoalaScore = (koalaScore1+koalaScore2+koalaScore3)/3;

console.log(`The average score of Dolphins is ${(dolphinScore1+dolphinScore2+dolphinScore3)/3}.`);
console.log(`The average score of Koalas is ${(koalaScore1+koalaScore2+koalaScore3)/3}.`);

if(avgDolphinScore > avgKoalaScore && avgDolphinScore >= 100) {
    console.log("Therefore, the Dolphins are the winner!");
} else if(avgDolphinScore < avgKoalaScore && avgKoalaScore >= 100) {
    console.log("Therefore, the Koalas are the winner!");

} else {
    console.log("It's a draw!");
}*/

// DATA 3
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

const avgDolphinScore = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
const avgKoalaScore = (koalaScore1+koalaScore2+koalaScore3)/3;

console.log(`The average score of Dolphins is ${(dolphinScore1+dolphinScore2+dolphinScore3)/3}.`);
console.log(`The average score of Koalas is ${(koalaScore1+koalaScore2+koalaScore3)/3}.`);

if(avgDolphinScore > avgKoalaScore && avgDolphinScore >= 100) {
    console.log("Therefore, the Dolphins are the winner!");
} else if(avgDolphinScore < avgKoalaScore && avgKoalaScore >= 100) {
    console.log("Therefore, the Koalas are the winner!");

} else if(avgDolphinScore === avgKoalaScore && avgDolphinScore >= 100 && avgKoalaScore >= 100){
    console.log("It's a draw!");
} else {
    console.log("No one wins the trophy.");
}