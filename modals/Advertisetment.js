const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdvertisementSchema = new Schema({
    title:String,
    price:String,
    conatctNumber:String,
    deccription:String,
    images:String 
});

module.exports = Advertisement = mongoose.model('advertisement',AdvertisementSchema);
