const isProd = process.env.BABEL_ENV === 'production';

module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        targets: {
          // The % refers to the global coverage of users from browserslist
          browsers: ['>0.25%', 'not op_mini all'],
        },
      },
    ],
    require('@babel/preset-react'),
    require('@babel/preset-flow'),
  ],
  plugins: [
    // Stage 2
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],

    // Stage 3
    require('@babel/plugin-syntax-dynamic-import'),
    [require('@babel/plugin-proposal-class-properties'), { loose: false }],
    [
      require('babel-plugin-styled-components'),
      {
        ssr: false,
        displayName: !isProd,
        minify: isProd,
      },
    ],
  ],
});
