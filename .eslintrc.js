module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': ['error', 'never'],
    'react/react-in-jsx-scope': 'off'
  }
}
