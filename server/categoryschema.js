var mongoose=require('mongoose');

var categorySchema = new mongoose.Schema({
	link:String,
	title:String,
    available:Boolean,

});

module.exports = mongoose.model('category', categorySchema, 'categories');
