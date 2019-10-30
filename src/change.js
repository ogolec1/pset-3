const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("Invalid.")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.")
} else {
    while (amount >= QUARTER){
      let quarters = amount / QUARTER
    }
    while (amount >= DIME) {
      let dimes = amount / DIME
    }
    while (amount >= NICKEL) {
      let nickels = amount / NICKEL
    }
    while (amount >= PENNY) {
      let pennies = amount / PENNY
    }

console.log (+ quarters + " quarters," + dimes + " dimes," + nickels + " nickels, and " + pennies + " pennies." )
}
