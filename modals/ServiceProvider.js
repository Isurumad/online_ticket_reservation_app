const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceProviderSchema = new Schema({
    firstName:String,
    lastName:String,
    email:{type:String, unique:true},
    password:String,
    phoneNo:String,
    companyName:String,
    companyLocation:String,
    CompanyContact:String 
});

module.exports =ServiceProvider = mongoose.model('serviceProvider',ServiceProviderSchema);
