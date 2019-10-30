// Stage 2
const stage2 = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
];

// Stage 3
const stage3 = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-json-strings',
];

/* Plugins run before Presets. */

/* Plugin ordering is first to last. */
const plugins = [...stage2, ...stage3, '@babel/plugin-transform-runtime'];

/* Preset ordering is reversed (last to first). */
const presets = ['@babel/preset-env'];

module.exports = api => {
  api.cache(true);

  return { plugins, presets };
};
