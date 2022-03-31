import { useQuery } from 'react-query';
import axios from 'axios';

export const loginPost = async ({email, password}) => {
  console.log(email, password);
  const { status } = await axios.post(
    'http://192.168.0.9:5000/api/v1/auth/login', {
      email: email,
      password: password
    });
  
  return true;
};

export default function useLogin(email, password) {
  return useQuery(['login', email, password], () => loginPost(email, password));
}