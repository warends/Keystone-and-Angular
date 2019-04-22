var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * ==========
 */

 var Gallery = new keystone.List('Gallery', {
	 map: {name: 'title'},
	 autokey: {path: 'slug', from: 'title', unique: true}
 });

 Gallery.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, height: 150},
	altText: { type: String}
 });

 Gallery.defaultCollumns = 'title, state|20%, image|20%, publishedDate|20%';
 
 Gallery.register();
