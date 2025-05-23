const firstArg = process.argv.slice(2);
const secondArg = process.argv.slice(3);

if (firstArg === undefined) {
    firstArg = undefined}
else if (secondArg === undefined) {
    secondArg = undefined}

    
console.log(`${firstArg} is ${secondArg}`);
