import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Posts from '@/posts';
import { getPosts } from '@/getPosts';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  queryClient.clear(); // Clear the query cache to free memory

  // ! To fetch the queries in parallel when possible
  // await Promise.all([
  //   queryClient.prefetchQuery({
  //     queryKey: ['posts'],
  //     queryFn: getPosts,
  //   }),
  //   queryClient.prefetchQuery({
  //     queryKey: ['posts'],
  //     queryFn: getPosts,
  //   }),
  // ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydratedState}>
      <Posts />
    </HydrationBoundary>
  );
}
