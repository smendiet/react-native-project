const express = require('express');

//const productsRouter = require('./products.router');
//const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const moviesRouter = require('./movies.router');
const authRouter = require('./auth.router');
//const orderRouter = require('./orders.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  //router.use('/products', productsRouter);
  //router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/movies', moviesRouter);
  //router.use('/orders', orderRouter);
}

module.exports = routerApi;
