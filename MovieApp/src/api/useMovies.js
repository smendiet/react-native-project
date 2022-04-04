import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';


const movieList = async () => {
  const { data } = await axios.get(
    `http://192.168.0.4:5000/api/v1/movies/`,
  );
  return data;
}

const movieProfile = async (email) => {
  const { data } = await axios.post(
    `http://192.168.0.4:5000/api/v1/movies/favorites`, {
    "user": email,
  });
  return data;
}

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
    `http://192.168.0.4:5000/api/v1/movies/title`,
    content,
  );

  return data;
};

export function useMoviesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      
      const data = await movieList();
      setMovies(data);
      
      setIsLoading(false);
    })();
  }, []);

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