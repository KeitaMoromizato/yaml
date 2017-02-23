const phantom = require('phantom');
const yaml = require('./lib');

const html = yaml('./dev/test.yml');

let page;

phantom.create()
.then(instance => instance.createPage())
.then(_page => {
  page = _page;
  return page.setContent(html, 'http://example.com');
})
.then(status => {
  console.log(status);
  return page.render('test.png');
})
.then(_ => {
  console.log("complete");
  process.exit(0);
})
.catch((error) => {
  console.error(error);
  process.exit(-1);
});
