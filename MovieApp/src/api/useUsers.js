import { useQuery } from 'react-query';
import axios from 'axios';

export const userGet = async ({email}) => {
  console.log('userGet', email);
  const { data } = await axios.get(
    `http://192.168.0.4:5000/api/v1/users/${email}`
  );

  return data;
};

export default function useUsers(email) {
  return useQuery(['user', email], () => userGet(email));
}