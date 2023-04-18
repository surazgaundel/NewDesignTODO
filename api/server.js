const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors');
const app = express()
require("dotenv").config();

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







const PORT = process.env.PORT||3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))