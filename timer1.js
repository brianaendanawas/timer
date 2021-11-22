let times = process.argv.slice(2);
let numCheck = true;

for (let i = 0; i < times.length; i++) {
  if (!(times[i] * 1)) {
    numCheck = false;
  } else if (times[i] < 0) {
    numCheck = false;
  }
}

if (!numCheck) {
  return;
} else if (!numCheck) {
  return;
} else {
  for (const time of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000)
  }
}