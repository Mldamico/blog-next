import classes from './PostContent.module.css';
import { PostHeader } from './PostHeader';
import ReactMarkdown from 'react-markdown';

export const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
