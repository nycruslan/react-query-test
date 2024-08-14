'use client';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getPosts } from '@/getPosts';

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export default function Posts() {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const { data }: { data: Data } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
