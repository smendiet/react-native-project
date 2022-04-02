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

  async findOneSecure(email) {
    const user = await Users.findOne(email);

    return {
      email: user.email,
      fullName: user.fullName,
      country: user.country,
      createdDate: user.createdDate,
      password: user.password,
    }; 
  };

  async findOne(email) {
    const user = await Users.findOne({ email: email });
    return {
      email: user.email,
      fullName: user.fullName,
      country: user.country,
      createdDate: user.createdDate,
    };
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
