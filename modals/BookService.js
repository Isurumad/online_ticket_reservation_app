const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookServiceSchema = new Schema({
    scheduleId:String,
    firstClass:String,
    secondClass:String,
    thirdClass:String,
    passengerId:String,
});

module.exports = BookService = mongoose.model('bookService',BookServiceSchema);
