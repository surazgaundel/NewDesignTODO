const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors');
const app = express()
require("dotenv").config();
const TODOSchema=require('./models/TODO');
app.use(express.json());
app.use(cors());

//db connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>console.log('DB connection established'))
.catch(err=>console.log('Error connecting to MongoDB',err))



app.get('/', (req, res) => res.send('Hello World!'))

//get the list of todos element
app.get('/todos',async(req,res)=>{
    const todos=await TODOSchema.find();
    res.json(todos)
})

//create a new todo element
app.post('/todo/new',(req,res)=>{
    const todo=new TODOSchema({
        text:req.body.text,
    })

    todo.save();
    res.json(todo)
});

//delete the todo elements
app.delete('/todo/delete/:id',async (req,res)=>{
    const deletedTodo=await TODOSchema.findByIdAndDelete(req.params.id);

    res.json(deletedTodo);
})

//update the  isComplete state of todo elements
app.put('/todo/update/:id',async (req,res)=>{
    const updatedTodo=await TODOSchema.findById(req.params.id);
    updatedTodo.isComplete=!updatedTodo.isComplete;
    updatedTodo.save();

    res.json(updatedTodo);
})

const PORT = process.env.PORT||3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))