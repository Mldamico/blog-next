import Head from 'next/head';
import { PostContent } from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

export default function SinglePostPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps({ params }) {
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
