const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    arrival:String,
    arrivalTime:String,
    destination:String,
    destinationTime:String,
    name:String,
});

module.exports = Ticket = mongoose.model('bookTicket',TicketSchema);
