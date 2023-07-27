import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import postRouter from './routes/posts.js'


const app=express();
app.use('/posts',postRouter);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
const CONNECTION_URL='mongodb+srv://tahemeena1997sadaf:tahemeena12@memories.wk6dzg2.mongodb.net/MEMORIES-PROJECT?retryWrites=true&w=majority';
const PORT=process.env. PORT || 5000;
mongoose.connect(CONNECTION_URL,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{app.listen(PORT,()=>console.log(`Server is running on port : ${PORT}`))})
.catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);
