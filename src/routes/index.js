const express = require('express');
const userRoutes = require('./routes')
const bookroute = require('./bookRoute')
const routes = express.Router();
const auth = require("../middlewares/auth");

routes.use('/auth', userRoutes)
routes.use('/book',auth, bookroute)

module.exports = routes;
