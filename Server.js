const express = require('express');
const mongoose = require('mongoose');

const Device = require('./Models/DeviceModel');
const DataLoader = require('./Models/DataLoaderModel');
const DataSet = require('./Models/DataSetModel');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB 
mongoose.connect('mongodb://127.0.0.1/WebADAMDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


// Define routes and middleware here

// Example route for fetching data from MongoDB
// Route for fetching devices

app.get('/device', async (req, res) => {
    try {
      const devices = await Device.find();
      res.json(devices);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route for fetching data loaders
  app.get('/dataLoader', async (req, res) => {
    try {
      const dataLoaders = await DataLoader.find();
      res.json(dataLoaders);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route for fetching data set
  app.get('/dataSet', async (req, res) => {
    try {
      const dataSet = await DataSet.find();
      res.json(dataSet);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});