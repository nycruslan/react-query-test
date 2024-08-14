'use client';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getPosts } from '@/getPosts';

export default function Posts() {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const { data } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
