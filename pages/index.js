import Head from 'next/head';
import { Hero } from '../components/home-page/Hero';
import { FeaturedPosts } from '../components/home-page/FeaturedPosts';

export const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React Framework for production. It makes building fullstack reacts app and sited a breeze and ships with built-in SSR.',
    date: '2021-04-06',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs2.png',
    excerpt:
      'NextJS is a React Framework for production. It makes building fullstack reacts app and sited a breeze and ships with built-in SSR.',
    date: '2021-04-06',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs3.png',
    excerpt:
      'NextJS is a React Framework for production. It makes building fullstack reacts app and sited a breeze and ships with built-in SSR.',
    date: '2021-04-06',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs4.png',
    excerpt:
      'NextJS is a React Framework for production. It makes building fullstack reacts app and sited a breeze and ships with built-in SSR.',
    date: '2021-04-06',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
