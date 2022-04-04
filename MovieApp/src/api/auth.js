import axios from 'axios';

import { config } from '../config/app'


export const authPosts = async (data) => {
  return await axios.post(`${config.baseUrl}/auth/login`, data);
};

