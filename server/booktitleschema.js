var mongoose=require('mongoose');

var bookTitleSchema = new mongoose.Schema({
	title:String,
	publisher:String,
	author:String,
	releaseDate:String,
	
});

module.exports = mongoose.model('book', bookTitleSchema, 'books');
