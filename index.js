import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./Router/routes.js";
import cors from "cors";

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1',router)

mongoose.connect('mongodb+srv://Krish24:Krish%402495@cluster0.s8xz5ha.mongodb.net/Machine_TaskQ1DB?retryWrites=true&w=majority')
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err, "err"));

app.listen(8000);

