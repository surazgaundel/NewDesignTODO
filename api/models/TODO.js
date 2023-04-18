//mongoose model schema
const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const TODOSchema= new Schema({
     text:{
        type: String,
        required: true,
     },
     isComplete:{
        type:Boolean,
        default:false
     },
     timeStamp:{
        type:Date,
        default:Date.now
     }
})

module.exports=mongoose.model('TODOSchema',TODOSchema)