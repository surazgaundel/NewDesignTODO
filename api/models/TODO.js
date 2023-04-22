//mongoose model schema
const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const TODOSchema= new Schema({
   text: {
		type: String,
		required: true,
		min:6
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
})

module.exports=mongoose.model('TODOSchema',TODOSchema)
