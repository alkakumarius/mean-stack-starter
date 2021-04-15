var mongoose=require('mongoose');

var bookTitleSchema = new mongoose.Schema({
	title:String,
	publisher:String,
	author:String,
});

module.exports = mongoose.model('book', bookTitleSchema, 'books');
