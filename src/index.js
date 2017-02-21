import yaml from 'js-yaml';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

//import pdf from 'html-pdf';

import Resume from './resume';

module.exports = function(yamlFile) {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));
    const html = renderToString(<Resume {...doc.resume} />);

    return html;

/*
    pdf.create(html).toFile(outFile, (err, data) => {
      console.log(data.filename);
    });
*/
  } catch (e) {
    console.log(e);
  }
};
