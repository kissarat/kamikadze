const request = require('request-promise')
const {interval, delay, youtube: {all, search, videos}} = require('./config')

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
      await youtubeCall('videos', Object.assign({id}, videos), 'https://web.archive.org/save/')
      console.log(new Date().toISOString(), id)
      await timeoutPromise()
    }
  }
  catch (ex) {
    console.error(ex)
  }
  setTimeout(run, interval || 10 * 60 * 1000)
}
