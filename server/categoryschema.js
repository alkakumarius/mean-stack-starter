var mongoose=require('mongoose');

var categorySchema = new mongoose.Schema({
	link:String,
	title:String,
    checked:Boolean,

});

module.exports = mongoose.model('category', categorySchema, 'categorys');
