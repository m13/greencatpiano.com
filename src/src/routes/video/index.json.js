import videos from './_data.js';

const contents = JSON.stringify(videos().map(video => {
	return {
		id: video.id,
		youtube_id: video.youtube_id,
		date: video.date,
		en: { title: video.en.title },
		es: { title: video.es.title },
		ja: { title: video.ja.title }
	};
}));

export function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(contents);
}
