let times = process.argv.slice(2);
let numCheck = times[0] * 1;

if (!numCheck) {
  return;
} else if (times[0] < 0) {
  return;
} else {
  for (const time of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000)
  }
}