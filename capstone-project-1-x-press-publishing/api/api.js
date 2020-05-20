const express = require('express');
const apiRouter = express.Router();
const artistRouter = require('./artists.js');
const seriesRouter = require('./series.js');

apiRouter.use('/artist', artistRouter);
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;