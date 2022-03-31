const { User } = require('../helpers/db');
const db = require('../helpers/db');

const Users = db.User;

class AuthService {
  constructor () {}

  async login(email, password) {
    const user = await Users.findOne({
      email: email
    });

    if (!user)
      throw new Error('User not found');
    
    if (!user.validPassword(password))
      throw new Error('User or password wrong!');

    return true;
  }
}

module.exports = AuthService;