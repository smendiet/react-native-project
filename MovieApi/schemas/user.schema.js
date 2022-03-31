const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string();
const lastName = Joi.string();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  firstName: firstName.required(),
  lastName: lastName,
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const validUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  validUserSchema
};
