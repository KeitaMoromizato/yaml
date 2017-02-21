import yaml from 'js-yaml';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Resume from './resume';

module.exports = (yamlFile) => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));
    const html = renderToString(<Resume {...doc.resume} />);

    return html;
  } catch (e) {
    throw e;
  }
};
