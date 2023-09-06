// models/Device.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  dataLoaderType: String,
  // Add other fields as needed
},
{ 
  collection: 'Device' 
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;