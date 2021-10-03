const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const placeRouter = require('./routes/places');
const usersRouter = require('./routes/users');
const groupsRouter = require('./routes/groups')

app.use('/places', placeRouter);
app.use('/users', usersRouter);
app.use('/groups', groupsRouter)
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});