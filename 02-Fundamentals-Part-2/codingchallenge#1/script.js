'use strict';
const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3 ;

// DATA - 1
/*const avgDolphins = calcAverage(44,23,71);
const avgKoala = calcAverage(65,54,49);*/

// DATA - 2
const avgDolphins = calcAverage(85,54,41);
const avgKoala = calcAverage(23,34,27); 

function checkWinner(dolphinScore, koalaScore){
    if(dolphinScore >= 2*koalaScore) {
        return `Dolphins win(${dolphinScore} vs ${koalaScore})`;
    } else if(avgKoala >= 2*koalaScore){
        return `Koalas win(${avgKoala} vs ${koalaScore})`;
    } else {
        return `Nobody wins`;
    }
}

console.log(checkWinner(avgDolphins, avgKoala));