const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.20 * billValue;
}

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log(tips);
console.log(totals);


// AVERAGE OF ARRAYS
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum/arr.length; 
    return average;
}

console.log(calcAverage(totals));

