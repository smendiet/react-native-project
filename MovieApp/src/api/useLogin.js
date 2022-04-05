import { useQuery } from 'react-query';
import axios from 'axios';

import { config } from '../config/app';

export const loginPost = async ({email, password}) => {
  const { status } = await axios.post(
    `${config.baseUrl}/auth/login`, {
      email: email,
      password: password
  });
  
  return true;
};

export default function useLogin(email, password) {
  return useQuery(['login', email, password], () => loginPost(email, password));
}