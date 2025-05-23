
const input = prompt("Say something:");
let space = " ";    
for (let i in input){
    space += input[i];
    if (i == undefined) {
        console.log("No argument")}
    
    else if ( space >= 1  ){
        console.log("Arguments found")}
    else {
        console.log("Argument found")
        }
          }
