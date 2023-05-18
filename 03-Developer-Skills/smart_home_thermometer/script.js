"use strict";
const temperature1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [8, 45, 6, 0, 23];
const tempsFinal = temperature1.concat(temperature2); //merging two arrays

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === "string") continue;
    if (temps[i] > max) {
      max = temps[i]; // maximum
    }
    if (temps[i] < min) {
      min = temps[i]; //minimum
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};
console.log(calcTempAmplitude(temperature1)); //PROBLEM 1
console.log(calcTempAmplitude(tempsFinal)); //PROBLEM 2
