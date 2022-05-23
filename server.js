//============================
//======== VARIABLES =========
//============================

const express = require('express');
const app = express();

    //Port Set Variable
    //============
const PORT = 3000;

    // Dependencies
    //==========
const mongoose = require('mongoose');

    //Database connection
    //==============
const DATABASE_URL = "mongodb+srv://admin:abc1234@cluster0.ibz4i.mongodb.net/?retryWrites=true&w=majority";
const db = mongoose.connection;

    //Connect MongoDB
    //==============
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//=============================
//======= ERROR LOGGER =========
//=============================

	// Database Connection Error/Success
	// Define callback functions for various events
	//=================================

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//=============================
//========= LISTENER ============
//=============================

app.listen(PORT, () => {
    console.log('Listening on port |', PORT);
})

//=============================
//======= MIDDLEWARE ===========
//=============================

	// Body parser middleware: it creates req.body
	//================================
app.use(express.urlencoded({ extended: false }));


//=============================
//========= ROUTES ============
//=============================

        //========================
        //===== Index / GET ==========
        //========================

app.get('/heroku', (req, res)=> {
    
})

        //========================
        //===== Show / GET ==========
        //========================

        //========================
        //===== New / GET ==========
        //========================

        //========================
        //===== Edit / GET ===========
        //========================

        //========================
        //===== Create / POST =======
        //========================

        //========================
        //===== Update / PUT ========
        //========================

        //=========================
        //===== Destroy / DELETE ======
        //=========================