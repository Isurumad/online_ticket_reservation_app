const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdvertisementSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    price: {
        type:String,
    },

    conatctNumber:{
        type:String
    },

    description:{
        type:String
    }
});

module.exports = Advertisement = mongoose.model('advertisement',AdvertisementSchema);
