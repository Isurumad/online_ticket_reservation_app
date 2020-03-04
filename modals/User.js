const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
    },

    email:{
        type:String
    },

    password:{
        type:String
    }

});

module.exports = User = mongoose.model('users',UserSchema);
