const args = process.argv.slice(2); 

let hasArgument = false;
let firstArg;

for (const arg of args) {
  firstArg = arg;
  hasArgument = true;
  break; 
}

if (hasArgument) {
  console.log(firstArg);
} else {
  console.log('No argument');
}
