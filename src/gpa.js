const readlineSync = require("readline-sync");

const grade = String(readlineSync.question("\nEnter a letter grade: "));

if (grade == "A+" || grade == "A" || grade == "a+" || grade == "a") {
  console.log("\nYour GPA is a 4.00.\n")
} else if (grade == "A-" || grade = "a-") {
  console.log("\nYour GPA is 3.67.\n")
} else if (grade == "B+" || grade = "b+") {
    console.log("\nYour GPA is 3.33.\n")
} else if (grade == "B" || grade == "b"){
  console.log("\nYour GPA is 3.00.\n")
} else if (grade == "B-" || grade == "b-") {
  console.log("\nYour GPA is 2.67.\n")
}
