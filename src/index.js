import yaml from 'js-yaml';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Resume from './resume';

module.exports = function(yamlFile) {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));
    const str = renderToString(<Resume {...doc.resume} />);

    console.log(str);
  } catch (e) {
    console.log(e);
  }
};
