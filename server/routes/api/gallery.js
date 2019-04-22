const keystone = require('keystone');
const Gallery = keystone.list('Gallery');

exports.list = (req, res) => {
	Gallery.model.find(function(err, items) {
    if (err) return res.json({ err: err });
    res.json({
      posts: items
    });
  });
}

exports.get = (req, res) => {
	Gallery.model.findById(req.params.id).exec((err, item) => {
		if (err) return res.json({err: err});
		if (!item) return res.json('not found');
		res.json({
			data: item
		});
	});
}
