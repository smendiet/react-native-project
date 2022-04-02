const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string();
const lastName = Joi.string();
const fullName = Joi.string();
const country = Joi.string();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  firstName: firstName.required(),
  lastName: lastName,
  fullName: fullName.required(),
  country: country,
});

const updateUserSchema = Joi.object({
  email: email.required(),
  fullName: fullName,
  country: country, 
});

const getUserSchema = Joi.object({
  email: email.required(),
});

const authUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const validUserSchema = Joi.object({
  email: email.required(),
  fullName: fullName.required(),
  country: country,
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  validUserSchema,
  authUserSchema,
};
