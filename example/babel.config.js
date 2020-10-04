module.exports = {
  presets: [['@babel/env', { modules: false }]],
  plugins: [
    ['@babel/proposal-decorators', { legacy: true }],
    ['@babel/proposal-class-properties', { loose: true }],
  ],
}
