module.exports = {
  use: [
    ['@neutrinojs/fork', {
      configs: {
        minified: {
          use: [
            (neutrino) => {
              lib = require('./../../../util/neutrino-library');

              lib(neutrino,   {
                name: 'recombee',
                filename: 'recombee-api-client.min.js',
                minify: true,
                target: 'web',
                externals: {
                  whitelist: ['jssha']
                },
                babel: {
                  presets: [
                    ['babel-preset-env', {
                      targets: {
                        browsers: [
                          'last 2 Chrome versions',
                          'last 2 Firefox versions',
                          'last 2 Edge versions',
                          'last 2 Opera versions',
                          'last 2 Safari versions',
                          'last 2 iOS versions',
                          '> 2% in BE'
                        ]
                      }
                    }]
                  ]
                }
              });
            }
          ]
        },

        nonminified: {
          use: [
            (neutrino) => {
              lib = require('./../../../util/neutrino-library');

              lib(neutrino,   {
                name: 'recombee',
                filename: 'recombee-api-client.js',
                minify: false,
                target: 'web',
                externals: {
                  whitelist: ['jssha'],
                },
                babel: {
                  presets: [
                    ['babel-preset-env', {
                      targets: {
                        browsers: [
                          'last 2 Chrome versions',
                          'last 2 Firefox versions',
                          'last 2 Edge versions',
                          'last 2 Opera versions',
                          'last 2 Safari versions',
                          'last 2 iOS versions',
                          '> 2% in BE'
                        ]
                      }
                    }]
                  ]
                }
              });
            }
          ]
        },
      }
    }]
  ]
};
