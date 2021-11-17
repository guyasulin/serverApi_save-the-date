const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@savethedate.c5p1w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('MongoDB Conected!');
})


const usersRoutes = require('./api/routes/users');
const eventRoutes = require('./api/routes/event');

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});

// Routes
app.use('/users', usersRoutes);
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
      message: 'Hello World 2'
  })
})

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);;
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      message: error.message
  })
})
module.exports = app;
