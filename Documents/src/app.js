const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/bookRoutes'); 
const app = express();

// Middleware
app.use(bodyParser.json()); /

mongoose.connect('your_mongodb_uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api', bookRoutes); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});