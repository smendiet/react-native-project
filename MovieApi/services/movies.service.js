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

  async findByGemres(genre) {
    let movies = [];
    if (genre && genre !== '') {
    console.log('findBygenres', genre);
      movies = await Movies.find({
        genres: {$in: [genre] }
      });
    } else {
    console.log('findBygenres else', genre);
      movies = await Movies.find();
    }
    
    return movies; 
  }

  async addEmailToMovie(id, user) {
    return await Movies.updateOne(
      {id: id},
      {$push: { users: user }});
  }

  async removeEmailToMovie(id, user) {
    return await Movies.updateOne(
      {id: id},
      {$pull : { users: user }}
    );
  }

}

module.exports = MovieService;
