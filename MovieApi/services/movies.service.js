const { Movie } = require('../helpers/db');
const db = require('../helpers/db');

const Movies = db.Movie;

class MovieService {
  constructor() {}

  async create(data) {
    return Movies.create(data);
  }

  async find() {
    return await Movies.find(); 
  }

  async findByTitle(title) {
    let movies = null;
    if (title) {
      movies = await Movies.find({
        title: {$regex: title, $options : 'i'}
      });
    } else {
      movies = await Movies.find();
    }

    return movies; 
  }

  async findFavorites(email) {
    return await Movies.find({
      users: {$in: [email] }
    });
  };

  async findByGemres(gemre) {
    return await Movies.find({
      gemres: {$in: [gemre]}
    });
  }

}

module.exports = MovieService;
