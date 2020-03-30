const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: './app',
    frameworks: ['jasmine'],
    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'lib/angular/angular.js': ['webpack', 'sourcemap'],
      'lib/angular-route/angular-route.js': ['webpack', 'sourcemap'],
      '../node_modules/angular-mocks/angular-mocks.js': ['webpack', 'sourcemap'],
      'core/**/*.js': ['webpack', 'sourcemap'],
      'view*/**/*.js': : ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}