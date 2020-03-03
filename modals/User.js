const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:String,
    lastName:String,
    email:{type:String, unique:true},
    password:String,
    phoneNo:String 
});

module.exports = User = mongoose.model('user',UserSchema);
