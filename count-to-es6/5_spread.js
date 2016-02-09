var inputs = process.argv.slice(2);

//spread the array
var min = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${min}`);