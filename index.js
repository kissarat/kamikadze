const run = require('./run')
const {youtube} = require('./config')

if (youtube && youtube.search && youtube.videos) {
  void run()
}
else {
  console.error('Run get-config.js to get default configuration')
}
