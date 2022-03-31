const boom = require('@hapi/boom');
const db = require('../helpers/db');

const Users = db.User;
class UserService {
  constructor() {}

  async create(data) {
    return Users.create(data);
  }

  async find() {
    return await Users.find(); 
  }

  async findOne(email) {
    return await User.findOne({ email: email });
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
