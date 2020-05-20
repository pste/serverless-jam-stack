'use strict';

const serverless = require('serverless-http');
const express = require('express');
const binaryMimeTypes = require('./binaryMimeTypes');

const app = express();
app.use(express.static('dist'));
module.exports.webapp = serverless(app, {
  binary: binaryMimeTypes
})
