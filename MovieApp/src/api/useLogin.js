import { useQuery } from 'react-query';
import axios from 'axios';

export const loginPost = async ({email, password}) => {
  const { status } = await axios.post(
    'http://192.168.0.4:5000/api/v1/auth/login', {
      email: email,
      password: password
  });
  
  return true;
};

export default function useLogin(email, password) {
  return useQuery(['login', email, password], () => loginPost(email, password));
}