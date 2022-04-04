const express = require('express');

const MovieService = require('./../services/movies.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { 
  getMovieByTitleSchema,
  getMovieByGemresSchema,
  getMovieFavoritesSchema,
  updateMovieSchema,
} = require('./../schemas/movies.schema');


const router = express.Router();
const service = new MovieService();

router.get('/', async (req, res, next) => {
  try {
    const movies = await service.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

router.post('/title',
  validatorHandler(getMovieByTitleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { title } = req.body;
      const movies = await service.findByTitle(title);

      res.status(201).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/favorites',
  validatorHandler(getMovieFavoritesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { user } = req.body;
      const movies = await service.findFavorites(user);

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/genres',
  validatorHandler(getMovieByGemresSchema, 'body'),
  async (req, res, next) => {
    try {
      const { genre } = req.body;
      const movies = await service.findByGemres(genre);

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/update',
  validatorHandler(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const {id, user} = req.body;
      const movie = await service.addEmailToMovie(id, user);

      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete',
  validatorHandler(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const {id, user} = req.body;
      await service.removeEmailToMovie(id, user);

      res.status(200);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
