FixRussianYouTube
=================
Saves youtube channel videos statistics at archive.org periodically using Youtube API

Сохраняет периодически статистику канала Youtube на archive.org используя Youtube API. Для запуска создайте конфигурацию по умолчанию
```bash
node get-config.js > config.json
```
В config.json:

youtube.all.key - это ключ API, который вы должны получить здесь https://console.developers.google.com/apis/credentials

interval - периодичность, с которой будет делаться сохранения (в миллисекундах), 5 минут по умолчанию

youtube.search.channelId - ID канала, статистику видео которых нужно сохранять, по умолчанию канал kamikadzedead [UCDbsY8C1eQJ5t6KBv9ds-ag](https://www.youtube.com/channel/UCDbsY8C1eQJ5t6KBv9ds-ag)

youtube.search.maxResults - количество последних видео канала, которые будут сохранятся, 10 по умолчанию

delay - задержка между запросами к archive.org
