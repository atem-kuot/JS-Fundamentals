const firstArg = process.argv[2];
const num = parseInt(firstArg);

if (isNaN(num)) {
  console.log('Missing size');
} else if (num > 0) {
  let i = 0;
  while (i < num) {
    console.log('X'.repeat(num));
    i++;
  }
}
