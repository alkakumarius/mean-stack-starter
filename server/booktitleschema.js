var mongoose=require('mongoose');

var bookTitleSchema = new mongoose.Schema({
	title:String,

});

module.exports = mongoose.model('book', bookTitleSchema, 'books');
