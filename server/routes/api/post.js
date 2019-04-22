const keystone = require('keystone');
const Post = keystone.list('Post');

/* List Posts */
exports.list = (req, res) => {
	Post.model.find()
		.where('state', 'published')
		.populate('author categories')
		.sort('-publishedDate')
		.exec((err, items) => {
			if (err) return res.json({ err: err });

			res.json({
				posts: items
			});
  });
}

/* Get Post by ID */
exports.get = (req, res) => {
	Post.model.findById(req.params.id)
		.where('state', 'published')
		.populate('author categories')
		.exec((err, item) => {
			if (err) return res.json({ err: err });
			if (!item) return res.json('not found');

			res.json({
				post: item
		});
  });
}
