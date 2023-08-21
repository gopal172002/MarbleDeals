const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const mainRoute = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const port = process.env.PORT
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json()) 
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('scripts'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRoute);
app.use(errorHandler);

const url = process.env.MONGOURL;
mongoose.connect(url ,{
    // useNewUrlParser : true,
useUnifiedtopoLogy : true})                             
var db= mongoose.connection;
db.on('error',()=>{console.log("Error in connecting to database.");}) 
db.once('open',()=>{console.log("Database Connected");})


app.set('view engine','ejs');
console.log(app.get('views'));
app.listen(port,()=>{
    console.log(`server run http://localhost:${port}`);
});