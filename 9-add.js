const firstArg = process.argv[2];
const secondArg = process.argv[3];

const num1 = parseInt(firstArg);
const num2 = parseInt(secondArg);

function add(a, b) {
    console.log(a + b);
}

if (!isNaN(num1) && !isNaN(num2)) {
    add(num1, num2 )}
else {
    console.log('NaN')}

