const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
