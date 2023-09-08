// models/DataSet.js
const { Number } = require('mongoose');
const { Date } = require('mongoose');
const mongoose = require('mongoose');

// Define the schema for the "DataSet" collection
const dataSetSchema = new mongoose.Schema({
  deviceID: String,
  timestamp: Date,
  Data: [
    {
      key1: String,
      key2: String,
    },
  ],
},
{ 
  collection: 'DataSet' 
});

// Create the Mongoose model for "DataSet"
const DataSet = mongoose.model('DataSet', dataSetSchema);

module.exports = DataSet;