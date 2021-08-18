const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const database = require('./database/database');
const cors =require('cors');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/userRoute.js');
const PORT = process.env.PORT
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})
app.use('/api/auth', authRoute)


app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`App runing on port ${PORT}`)
})

database.connect();