import videos from './_data.js';

const contents = JSON.stringify(
  videos()
    .map(video => ({
      id: video.id,
      category: video.category,
      youtube_id: video.youtube_id,
      date: video.date,
      en: {title: video.en.title},
      es: {title: video.es.title},
      ja: {title: video.ja.title}
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
);

export function get(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(contents);
}
