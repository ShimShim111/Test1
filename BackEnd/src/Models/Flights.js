const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Id .....

const flightsSchema = new Schema({

  // _id: {type: String,
  //    auto: true},

  // Flight_No: {
  //   type: Number,
  //   unique: true,
  //   //required: true,
  // },

  From: {
    type: String,
   required: true,
  },
  To: {
    type: String,
   required: true
  },
  Flight_Date: {
    type: Date,
   required: true,
  },
  Cabin: {
    type: String,
   required: true
  },
  Available_Seats: {
    type: Number,
   required: true
  }
}, { timestamps: true });

mongoose.models = {}
const Flights = mongoose.model('Flights', flightsSchema);
module.exports = Flights;
