const readline = require('readline');
const timer = require('./timer1');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Input");
rl.on('line', (input) => { // input
  if (input === "b") { // if b then immediate beep
    process.stdout.write('\x07');
    process.stdout.write('.\n');
  }
  timer(input);
});

rl.on('SIGINT', () => { // ctr + c exit
  console.log("Thanks for using me, ciao!");
  rl.close();
});