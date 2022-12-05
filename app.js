const express = require('express');
const mongoose = require('mongoose'); 
const patientRouter = require('./routers/patientRouters');
const cors = require("cors")
// Express app
const app = express();

//app.use(express.urlencoded({ extended: true }));

app.use(require('body-parser').json());

// connect to mongoDB
// mongoose to connect and interact with DataBase
const dbURI = 'mongodb+srv://karim:789456123@dentistdb.jucqsfg.mongodb.net/DentistDB?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { 
        app.listen(5000); 
        console.log('connected to db') 
    })
    .catch((err) => console.log(err)); 

    
const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error("Not allowed by CORS"))
        }
      },
      credentials: true,
    }
app.use(cors(corsOptions))


app.use('/patients',patientRouter);