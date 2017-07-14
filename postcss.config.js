module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [ 'Android >= 4', 'iOS > 6', 'last 10 Chrome versions']
    })
  ]
}
