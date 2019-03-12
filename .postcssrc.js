module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-plugin-px2rem": { 
      remUnit: 100,
      mediaQuery: true,
      exclude: "/node_modules/i",
      selectorBlackList: ['html', 'mint-', 'picker-', 'mt-', 'mpvue-', 'calendar', 'iconfont'],
      propBlackList: ['border']
    }
  }
}