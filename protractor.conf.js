exports.config = {
  framework: 'mocha',
  capabilities: {
      browserName:'chrome'
  },

  baseUrl: 'http://localhost:3000',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['src/**/*.e2e.js'],

  mochaOpts: {
    reporter: "spec",
    slow: 3000
  },

  onPrepare: function () {
    require("babel-core/register")({
      presets: [ "es2015" ]
    });
  }
}
