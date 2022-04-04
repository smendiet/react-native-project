const Joi = require('joi');

const title = Joi.string();
const rank = Joi.number();
const id = Joi.string();
const user = Joi.string();
const users = Joi.array();
const genres = Joi.array();
const genre = Joi.string();

const createMovieSchema = Joi.object({
  title: title.required(),
  rank: rank,
  users: users,
});

const getMovieByTitleSchema = Joi.object({
  title: title,
});

const getMovieFavoritesSchema = Joi.object({
  user: user.required(),
});

const getMovieByGemresSchema = Joi.object({
  genre: genre,
});

const validMovieSchema = Joi.object({
  title: title.required(),
  rank: rank,
  users: users,
});

const updateMovieSchema = Joi.object({
  id: id.required(),
  user: user.required(),
});

module.exports = {
  getMovieByTitleSchema,
  getMovieFavoritesSchema,
  getMovieByGemresSchema,
  updateMovieSchema,
};
