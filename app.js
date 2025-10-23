const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require dotenv
const dotenv = require('dotenv');
dotenv.config();
PORT = process.env.PORT;

// mongodb connection 
const connectDB = require('./db/dbconn');
connectDB();  

// user router 
const user = require('./routers/user.routes.js');
app.use('/user',user);

// admin router 
const admin = require('./routers/admin.routes.js');
app.use('/admin',admin);


app.listen(PORT, () => {
    console.log(`App is Running on Port ${PORT}`);
})