import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import marked from 'marked';

export default () =>
  fs
    .readdirSync(`data/video/`)
    .filter(file => file[0] !== '.' && path.extname(file) === '.yml')
    .map(file => {
      const markdown = fs.readFileSync(`data/video/${file}`, 'utf-8');
      const parsed = yaml.load(markdown);
      marked.setOptions({
        gfm: true,
        headerIds: true
      });
      // hardcoded
      parsed.en.body = marked(parsed.en.body);
      parsed.es.body = marked(parsed.es.body);
      parsed.ja.body = marked(parsed.ja.body);

      return parsed;
    });
