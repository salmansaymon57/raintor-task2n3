// import { useInfiniteQuery } from '@tanstack/react-query';
// import axios from 'axios';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: { title: string };
}

interface UserResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

// const fetchUsers = async ({ pageParam = 0 }: { pageParam?: number }) => {
//   const response = await axios.get<UserResponse>(`https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`);
//   return response.data;
// };

// const useUserFeed = () => {
//   return useInfiniteQuery(['users'], ({ pageParam = 0 }) => fetchUsers({ pageParam }), {
//     getNextPageParam: (lastPage: UserResponse, pages) => {
//       const total = lastPage.total;
//       const nextSkip = pages.length * 10;
//       return nextSkip < total ? nextSkip : undefined;
//     },
//     keepPreviousData: true,
//   });
// };

export type { User, UserResponse };
// export default useUserFeed;