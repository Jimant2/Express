// models/DataLoader.js
const mongoose = require('mongoose');

const dataLoaderSchema = new mongoose.Schema({
  name: String,
  description: String
  // Add other fields as needed
},
{ 
  collection: 'DataLoader' 
});

const DataLoader = mongoose.model('DataLoader', dataLoaderSchema);

module.exports = DataLoader;