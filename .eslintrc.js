module.exports = {
  root: true,
  extends: [
    // 'standard',
    // "eslint-config-airbnb-base",
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/base',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    'prettier/vue',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['vue', 'prettier'],
  env: {
    browser: true
  },
  globals: {
    require: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2015
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
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
