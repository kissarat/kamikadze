const config = {
  interval: 5 * 60 * 1000,
  delay: 200,
  youtube: {
    all: {
      // Youtube personal API key https://console.developers.google.com/apis/credentials
      key: ''
    },
    search: {
      channelId: 'UCDbsY8C1eQJ5t6KBv9ds-ag',
      part: 'id',
      order: 'date',
      maxResults: 10
    },
    videos: {
      part: 'statistics'
    }
  }
}

console.log(JSON.stringify(config, null, '  '))
