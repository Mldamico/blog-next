import Head from 'next/head';
import { AllPosts } from '../../components/posts/AllPosts';
import { DUMMY_POSTS } from '../index';

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
