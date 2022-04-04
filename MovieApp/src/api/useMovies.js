import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { config } from '../config/app';


const movieList = async (genre) => {
  let content = {};
  if (genre && genre !== '') {
    content = {
      "genre": genre,
    }
  }

  const { data } = await axios.post(
    `${config.baseUrl}/movies/genres`, 
    content,
  );

  return data;
}

const movieProfile = async (email) => {
  const { data } = await axios.post(
    `${config.baseUrl}/movies/favorites`, {
    "user": email,
  });
  return data;
}

export const movieUpdate = async ({movieId, email}) => {
  const { data } = await axios.post(
    `${config.baseUrl}/movies/update`, {
      "id": movieId,
      "user": email,
  });

  return data;
};

export const movieDelete = async ({movieId, email}) => {
  const { data } = await axios.post(
    `${config.baseUrl}/movies/delete`, {
      "id": movieId,
      "user": email,
  });
  return data;
};

export const movieSearch = async (title) => {
  let content = null;

  if (title && title !== "" ) {
    content = {
      "title": title
    };
  } else {
    content = {};
  }

  const { data } = await axios.post(
    `${config.baseUrl}/movies/title`,
    content,
  );

  return data;
};

export function useMoviesList(genre) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      
      const data = await movieList(genre);
      setMovies(data);
      
      setIsLoading(false);
    })();
  }, [genre]);

  return { isLoading, movies };
}

export function useMovieSearch(title) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const data = await movieSearch(title);
      setMovies(data);

      setIsLoading(false);
    })();
  }, [title]);

  return { isLoading, movies };
}

export function useMovieProfile(email) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const data = await movieProfile(email);
      setMovies(data);

      setIsLoading(false);
    })();
  }, [email]);

  return { isLoading, movies };
}
