import { resolve } from 'path';

const CONFIG_FILE = './i18n.config.js';

const DEFAULT_CONFIG = {
  languages: [],
  sourceFiles: 'src/**/*.{ts,tsx,js,jsx}',
  ignore: '**/*.d.ts',
  targetFolder: 'src/lang',
};

export default async function getConfig() {
  try {
    const file = resolve(CONFIG_FILE);
    const config = (await import(file)).default;

    return {
      ...DEFAULT_CONFIG,
      ...config,
    };
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND')
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: Configuration file not found. Using default configuration.',
      );
    // eslint-disable-next-line no-console
    else console.error(`Error [${err}]. Using default configuration.`);

    return DEFAULT_CONFIG;
  }
}
