const Joi = require('joi');

const title = Joi.string();
const rank = Joi.number();
const id = Joi.string();
const user = Joi.string();
const users = Joi.array();
const gemres = Joi.array();
const gemre = Joi.string();

const createMovieSchema = Joi.object({
  title: title.required(),
  rank: rank,
  users: users,
});

const updateMovieSchema = Joi.object({
  id: id.required(),
  title: title,
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
  gemre: gemre.required(),
});

const validMovieSchema = Joi.object({
  title: title.required(),
  rank: rank,
  users: users,
});

module.exports = {
  getMovieByTitleSchema,
  getMovieFavoritesSchema,
  getMovieByGemresSchema,
};
