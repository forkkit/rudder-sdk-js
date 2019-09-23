module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script",
    ecmaFeatures: {}
  },
  rules: {
    "constructor-super": 2,
    "for-direction": 2,
    "getter-return": 2,
    "no-async-promise-executor": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-misleading-character-class": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-new-symbol": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-self-assign": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-labels": 2,
    "no-unused-vars": 0,
    "no-useless-catch": 2,
    "no-useless-escape": 2,
    "no-with": 2,
    "require-atomic-updates": 2,
    "require-yield": 2,
    "use-isnan": 2,
    "valid-typeof": 2
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    "shared-node-browser": true,
    worker: true,
    amd: true,
    mocha: true,
    jasmine: true,
    jest: true,
    phantomjs: true,
    jquery: true,
    qunit: true,
    prototypejs: true,
    shelljs: true,
    meteor: true,
    mongo: true,
    protractor: true,
    applescript: true,
    nashorn: true,
    serviceworker: true,
    atomtest: true,
    embertest: true,
    webextensions: true,
    es6: true,
    greasemonkey: true
  }
};
