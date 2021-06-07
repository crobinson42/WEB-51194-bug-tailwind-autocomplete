const atalaya = require('@therms/atalaya')

module.exports = {
  presets: [atalaya.configs.tailwind],

  purge: {
    content: [
      'public/**/*.html',
      'public/**/*.css',
      'public/**/*.js',
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.css',
    ],
    enabled: true,
  },
}
