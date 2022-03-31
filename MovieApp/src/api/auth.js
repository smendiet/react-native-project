import axios from 'axios';

export const authPosts = async (data) => {
  return await axios.post('http://localhost:3000/api/v1/auth/login', data);
};

