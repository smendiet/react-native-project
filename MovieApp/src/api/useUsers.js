import { useQuery } from 'react-query';
import axios from 'axios';

import { config } from '../config/app';


export const userGet = async ({email}) => {
  console.log('userGet', email);
  const { data } = await axios.get(
    `${config.baseUrl}/users/${email}`
  );

  return data;
};

export default function useUsers(email) {
  return useQuery(['user', email], () => userGet(email));
}