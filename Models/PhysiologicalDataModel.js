// models/PhysiologicalData.js
const { Number } = require('mongoose');
const { Date } = require('mongoose');
const mongoose = require('mongoose');

// Define the schema for the "PhysiologicalData" collection
const physiologicalDataSchema = new mongoose.Schema({
  DeviceID: String,
  Date: Date,
  Data: [
    {
      Timestamp: Number,
      Value: Number,
    },
  ],
},
{ 
  collection: 'PhysiologicalData' 
});

// Create the Mongoose model for "PhysiologicalData"
const PhysiologicalData = mongoose.model('PhysiologicalData', physiologicalDataSchema);

module.exports = PhysiologicalData;