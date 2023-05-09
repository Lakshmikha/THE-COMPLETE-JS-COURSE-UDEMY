/* // DATA 1
 const bill = 275;  
   
// DATA 2
const bill = 40; */

// DATA 3
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (0.15 * bill) : (0.20 * bill);

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}.`);