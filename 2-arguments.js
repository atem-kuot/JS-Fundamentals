
const args = process.argv.slice(2);
let count = 0;
for (const arg of args) {
    count++;
        }
    if (count === 0) {
        console.log("No argument")}
    
    else if ( count === 1  ){
        console.log("Argument found")}
    else {
        console.log("Arguments found")
        }
