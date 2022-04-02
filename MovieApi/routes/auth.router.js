const express = require('express');

const AuthService = require('../services/auth.service');
const validatorHandler = require('../middlewares/validator.handler');
const { authUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const service = new AuthService();

router.post('/login',
  validatorHandler(authUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const isValid = await service.login(email, password);

      if (!isValid) {
        res.status(401);
      }

      console.log('Authenticated sucessfully');

      res.json({
        message: 'Authenticated sucessfully',
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
