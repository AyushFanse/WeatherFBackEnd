const mongoose = require('mongoose');



//////----------------------* Mongoose Connection *----------------------//////

exports.connect = () => {
    try{
    mongoose.connect('mongodb+srv://weather:weather@weatherforecasting.mxvee.mongodb.net/Weather_Forecasting?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
    } catch(err) {
        alert('Error connecting to Server')
        process.exit();
    }
}

