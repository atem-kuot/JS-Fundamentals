const firstArg = process.argv[2];
const num = parseInt(firstArg);
let i = 0;

while (num > i){
if (!isNaN(num)) {
    console.log("X".repeat(num));
} else {
    console.log('Missing size');
}
i++;
}
