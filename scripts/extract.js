import { glob } from 'glob';
import { extract } from '@formatjs/cli-lib';

import getConfig from './getConfig.js';

(async () => {
  const options = await getConfig();

  const files = await glob(options.sourceFiles, { ignore: options.ignore });
  const extracted = await extract(files, { throws: true });

  // eslint-disable-next-line no-console
  console.log(extracted);
})();
