const request = require('request-promise')
const {interval, delay, youtube: {all, search, videos}} = require('./config')

let channelId
const rex = /^--channel=(.*)$/.exec(process.argv[process.argv.length - 1])
if (rex) {
  channelId = rex[1]
  console.log('CHANNEL: ' + channelId)
}

function youtubeCall(method, options, prefix = '') {
  return request({
    uri: prefix + 'https://www.googleapis.com/youtube/v3/' + method,
    qs: Object.assign(options, all),
    json: true
  })
}

function timeoutPromise() {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay || 200)
  })
}

module.exports = async function run() {
  try {
    const r = await youtubeCall('search', search)
    const ids = r.items.map(item => item.id.videoId)
    for(const id of ids) {
      const options = Object.assign({id}, videos)
      if (channelId) {
        options.channelId = channelId
      }
      await youtubeCall('videos', options, 'https://web.archive.org/save/')
      console.log(new Date().toISOString(), id)
      await timeoutPromise()
    }
  }
  catch (ex) {
    console.error(ex)
  }
  setTimeout(run, interval || 10 * 60 * 1000)
}
