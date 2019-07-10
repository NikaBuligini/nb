module.exports = {
  env: {
    node: true,
    jest: true,
  },

  parser: 'babel-eslint',

  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-plugin-flowtype/dist/configs/recommended',
  ].map(require.resolve),

  plugins: ['react', 'jsx-a11y', 'import', 'flowtype', 'prettier', 'react-hooks'],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
    'react/jsx-wrap-multilines': [0],
    'react/no-array-index-key': [0],
    'react/prop-types': [0],
    'react/no-danger': [0],
    'react/no-did-mount-set-state': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/destructuring-assignment': [0],
    'react/no-access-state-in-setstate': [0],
    'react/no-children-prop': [0],
    'react/no-did-update-set-state': [0],
    'react/no-multi-comp': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/label-has-associated-control': [0],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
    'import/no-named-as-default': [0],
    'prettier/prettier': [2],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
    'linebreak-style': [0, 'unix'],
    'arrow-parens': [0],
    'no-confusing-arrow': [0],
  },

  globals: {
    window: true,
    fetch: true,
    document: true,
    location: true,
    localStorage: true,
    navigator: true,
    URLSearchParams: true,
    FormData: true,
    FileReader: true,
  },
};
