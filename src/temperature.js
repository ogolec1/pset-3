const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "))

const celsiusFreezingPoint = 0;
const celsiusBoilingPoint = 100;
const kelvinFreezingPoint = 273;
const kelvinBoilingPoint = 373;
const fahrenheitFreezingPoint = 32;
const fahrenheitBoilingPoint = 212;

if (temperature < (Number.MIN_SAFE_INTEGER) || temperature > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n")
} else if (temperature <= fahrenheitFreezingPoint && (scale == "F" || scale == "f")) {
  console.log("\nSolid.\n")
} else if ((temperature > fahrenheitFreezingPoint && temperature < fahrenheitBoilingPoint) && (scale == "F" || scale == "f")) {
  console.log("\nLiquid.\n")
} else if (temperature >= fahrenheitBoilingPoint && (scale == "F" || scale == "f")) {
  console.log("\nGas.\n")
} else if (temperature <= celsiusFreezingPoint && (scale == "C" || scale == "c")) {
  console.log("\nSolid.\n")
} else if ((temperature > celsiusFreezingPoint && temperature < celsiusBoilingPoint) && (scale == "C" || scale == "c")) {
  console.log("\nLiquid.\n")
} else if (temperature >= celsiusBoilingPoint && (scale == "C" || scale == "c")) {
  console.log("\nGas.\n")
} else if (temperature <= kelvinFreezingPoint && (scale == "K" || scale == "k")) {
  console.log("\nSolid.\n")
} else if ((temperature > kelvinFreezingPoint && temperature < kelvinBoilingPoint) && (scale == "K" || scale == "k")) {
  console.log("\nLiquid.\n")
} else if (temperature >= kelvinBoilingPoint && (scale == "K" || scale == "k")) {
  console.log("\nGas.\n")
} else {
  console.log("\nInvalid.\n")
}
