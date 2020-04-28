import videos from './_data.js';

const lookup = new Map();

videos().forEach(video => {
	lookup.set(video.id, JSON.stringify(video));
});

export function get(req, res, next) {
	const { id } = req.params;

	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Video not found`
		}));
	}
}
