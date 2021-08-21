// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
var port = process.env.PORT;
if (port === undefined){
    port = 5000;
};

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// database connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: false
    })
    .then(() => console.log("Connected to the database!"))
    .catch((err) => console.log(err));

// Routes prefix
app.use('/api/post', require("./routes/routes"));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/dist/'));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/dist/index.html");
    })
}

// start server
app.listen(port, () => console.log('Server running at PORT: '+port));