import yaml from 'js-yaml';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Resume from './resume';

const wrapper = html => `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <style>
  html, body {
    padding: 0;
    margin: 0;
  }
  </style>
</head>
<body>
${html}
</body>
</html>
`;

module.exports = (yamlFile) => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));
    const html = renderToString(<Resume {...doc.resume} />);

    return wrapper(html);
  } catch (e) {
    throw e;
  }
};
