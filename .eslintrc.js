module.exports = {
  root: true,
  extends: [
    // 'standard',
    // "eslint-config-airbnb-base",
    // 'plugin:prettier/recommended',
    // 'eslint:recommended'
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  env: {
    browser: true
  },
  globals: {
    require: true
  },
  // parser: "babel-eslint",
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['app/javascript']
          }
        }
      }
    }
  }
  // rules: {
  //   'prettier/prettier': 'error'
  // }
};
