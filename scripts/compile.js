import { mkdir, readFile, writeFile } from 'fs/promises';
import { EOL } from 'os';
import { resolve } from 'path';
import { glob } from 'glob';
import { extract } from '@formatjs/cli-lib';

import getConfig from './getConfig.js';

(async () => {
  const options = await getConfig();

  const files = await glob(options.sourceFiles, { ignore: options.ignore });
  const extracted = JSON.parse(await extract(files, { throws: true }));

  const folder = resolve(options.targetFolder);
  await mkdir(folder, { recursive: true });

  options.languages.forEach(async lang => {
    const file = resolve(folder, `${lang}.json`);
    const current = await readJson(file);

    const messages = Object.fromEntries(
      Object.entries(extracted).map(([key, val]) => [
        key,
        current[key] ?? val.defaultMessage,
      ]),
    );
    await writeJson(file, messages);

    // eslint-disable-next-line no-console
    console.log(`Message strings extracted to ${file}`);
  });
})();

export async function readJson(file) {
  try {
    const input = await readFile(file, 'utf8');
    return JSON.parse(input);
  } catch {
    return {};
  }
}

export async function writeJson(file, data) {
  const output = `${JSON.stringify(data, undefined, 2)}${EOL}`;
  await writeFile(file, output, 'utf8');
}
