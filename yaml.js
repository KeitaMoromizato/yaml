const pdf = require('html-pdf');
const yaml = require('./lib');

const html = yaml('./dev/test.yml');

pdf.create(html, { type: 'png' }).toFile('resume.png', (err, data) => {
  if (err) return console.error(err);

  console.log(data.filename);
});
