// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-phantomjs-launcher'),
      require('karma-junit-reporter') ,
      require('karma-coverage')
    ],
    files:[
      'src/spec/unit/**/*.js'

    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    junitReporter:{
        outputDir:"./reports",
        outputFile:'junit/test.xml'
    },
    
    coverageReporter: {
        type:   'lcov',
        dir:    'reports',
        subdir:'coverage'
     
    },
    angularCli: {
      environment: 'dev'
    },

    reporters: ['progress', 'kjhtml','junit','coverage'],
    preprocessors:    {
      'src/app/**/*.js':   ['coverage']
  },
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
