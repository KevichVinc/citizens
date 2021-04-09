const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const citizens = require('./backendPart/routes/citizens');

const port = 6000;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  }),
);

app.use(morgan('dev'));
app.use(express.json({ limit: '50mb', extended: true }));
app.use('/api/citizens', citizens);
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to Atlas db');
});

mongoose.connect(
  'mongodb+srv://developer:muvimo@v0.q0wxj.mongodb.net/Citizens-hierarchy?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

http.createServer(app).listen(port);
