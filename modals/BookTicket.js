const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookTicketSchema = new Schema({
    scheduleId:String,
    firstClass:String,
    secondClass:String,
    thirdClass:String,
    passengerId:String,
});

module.exports = BookTicket = mongoose.model('bookTicket',BookTicketSchema);
