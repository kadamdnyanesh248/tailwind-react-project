// @flow

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

const purgecss = postcssPurgecss({
  content: ['./src/**/*.html', './src/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    ...(isProd
      ? [
          purgecss,
          cssnano({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
