#!/usr/bin/env node

import { globby } from 'globby';
import { extract } from '@formatjs/cli-lib';

import getConfig from './getConfig.js';

(async () => {
  const options = await getConfig();

  const files = await globby([
    options.sourceFiles,
    `!${options.ignore || '*'}`,
  ]);
  const extracted = await extract(files, { throws: true });

  // eslint-disable-next-line no-console
  console.log(extracted);
})();
