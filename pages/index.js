import Head from 'next/head';
import { Hero } from '../components/home-page/Hero';
import { FeaturedPosts } from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
