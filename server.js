const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/api/tasks');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

// MongoDB Configuration
const db = require('./config/keys').mongoURI;

// Connect To MongoDB
mongoose.connect(
    db, { useNewUrlParser: true }).
    then(() => console.log('MongoDB Connected...')).
    catch(err => console.log('Mongo failed to connect.'));

app.use('/api/tasks', tasks);


// Run SERVER On Port 5000
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));
