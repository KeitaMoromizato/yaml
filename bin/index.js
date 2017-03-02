const phantom = require('phantom');
const argv = require('minimist')(process.argv.slice(2));

const yaml2resume = require('../lib');

const yamlFile = argv._[0];
const outFile = argv.o || 'resume.pdf';

if (!yamlFile) {
  throw new Error('yaml file unspecified.');
}

const html = yaml2resume(yamlFile);

let page;

phantom.create()
.then(instance => instance.createPage())
.then((_page) => {
  page = _page;
  return page.setContent(html, 'http://example.com');
})
.then(() => page.render(outFile, { format: 'pdf' }))
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(-1);
});
