// node timer1.js 10 3 5 -1 y
const timer = (alarms) => {
  for (let i = 0; i < alarms.length; i++) {
    // checks if current item from alarms is a number and its positive
    if (typeof Number(alarms[i]) === "number" && Number(alarms[i]) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07'); // makes a bell sound
        process.stdout.write('.\n');
      }, alarms[i] * 1000);
    }
  }
}

let args = process.argv.splice(2);
timer(args);