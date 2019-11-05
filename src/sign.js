const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MIN_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter a number: "));

if (!Number.isInteger(number)) {
  console.log("\nInvalid.\n")
} else if (number < (Number.MIN_SAFE_INTEGER)|| number > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.\n")
} else if (number < 0) {
  console.log ("\nNegative.\n")
} else if (number == 0){
  console.log("\nZero.\n")
} else if (number > 0) {
  console.log("\nPositive.\n")
} else {
  console.log("\nInvalid.\n")
}
