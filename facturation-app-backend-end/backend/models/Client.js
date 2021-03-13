const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
  lastname: { type: String, required: true},
  firstname: { type: String, required: true},
  function: { type: String},
  phone: { type: String},
  email: { type: String},
  society: { type: String, required: true},
  firstaddress: { type: String},
  secondaddress: { type: String},
  postalcode: { type: String},
  city: { type: String},
  country: { type: String},
  adddate: {type: Date, required: true},
})
module.exports = mongoose.model('Clients', clientSchema)