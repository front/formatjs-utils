# @frontkom/formatjs-utils

`formatjs-utils` is a versatile package providing a collection of tools designed to augment [FormatJS](https://formatjs.io/) utilities. The primary role of these tools centers on the extraction and compilation of translatable message strings, making this an essential addition to localization and internationalization workflows.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install @frontkom/formatjs-utils.

```bash
npm install @frontkom/formatjs-utils
```

## Available Scripts

The package comes with the following scripts:

1. `i18n-extract`: Extracts the translatable strings from your application.
2. `i18n-compile`: Compiles these extracted strings back into JSON files.

These scripts can either be included into your `package.json`'s scripts section or can be used with `npm exec` directly.

```bash
npm exec i18n-extract
npm exec i18n-compile
```

## Configuration

This package requires a specific configuration file `i18n.config.js` to be created in your project's root directory. This is to customize the utility to your project's specific needs. All the fields are optional.

### Example `i18n.config.js`

```js
exports default {
  languages: ['en', 'fr'],
  sourceFiles: 'src/**/*.{ts,tsx,js,jsx}',
  ignore: '**/*.d.ts',
  targetFolder: 'src/lang',
};
```

## Usage

Make sure to add the scripts to your `package.json` in order to extract and compile the messages:

```bash
# Extract the messages
npm run i18n-extract

# Compile the messages into JSON
npm run i18n-compile
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
