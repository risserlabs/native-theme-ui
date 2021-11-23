const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8');

const lines = data
  .replace(/\u001b\[\d*?m/g, '')
  .split('\n')
  .map((line) => line.split(/\s+(.+)/).map((item) => item.trim()));

console.log('| command | description |');
console.log('| --- | --- |');
lines.forEach((line) => {
  if (line && line[0] && line[0].length) {
    const command = line[0];
    let description = '';
    if (line[1] && line[1].length) {
      description = line[1];
    }
    console.log('|', '`make ' + command + '`', '|', description, '|');
  }
});
