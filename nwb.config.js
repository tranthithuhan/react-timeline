var path = require('path');
module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
    webpack: {
        rules: {
            svg: {
                loader: 'url-loader',
                options: {classPrefix: true}
            },
            sass: {
                includePaths: [path.resolve('src/style/index')]
            },
            'sass-css': {
                modules: true,
                localIdentName:  '[hash:base64:5]'
            },
        }
    }
}
