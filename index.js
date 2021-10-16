const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const port = 6500;
const app=express();
dotenv.config();

let order_id_variable
// form data parsing
app.use(express.urlencoded({extended:false}));


//================ Static Files ==================
app.use(express.static('./assets'));

//======== View Engine ======================
app.set('view engine','ejs');
app.set('views','./views');

//========  express router ===============
app.use('/',require('./routes'));

app.listen(process.env.PORT || port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});


