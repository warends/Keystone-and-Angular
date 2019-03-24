var keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
  Post.model.find(function(err, items) {
    if (err) return res.json({ err: err });
    res.json({
      posts: items
    });
  });
}

/**
 * Get Post by ID
 */
exports.get = function(req, res) {
  Post.model.findById(req.params.id).exec(function(err, item) {
    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');
    res.json({
      post: item
    });
  });
}
