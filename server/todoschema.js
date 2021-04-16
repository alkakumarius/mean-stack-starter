var mongoose=require('mongoose');

var todoSchema = new mongoose.Schema({
	comment:String,
	email:String,
	type:String,
	checked:Boolean,


});

module.exports = mongoose.model('todo', todoSchema, 'todos');
