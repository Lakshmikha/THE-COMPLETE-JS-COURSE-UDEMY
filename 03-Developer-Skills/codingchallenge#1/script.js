const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log("... " + str); //to add the dots in the beginning of the string
};

// DATA 1
printForecast(temp1);
// DATA 2
printForecast(temp2);

// improvements
// to bring in the same line, initialize an empty string and add the computed strings to that
// missed the seperator dot
