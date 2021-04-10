var mongoose=require('mongoose');

var todoSchema = new mongoose.Schema({
	comment:String,
	email:String
});

module.exports = mongoose.model('todo', todoSchema, 'todos');
