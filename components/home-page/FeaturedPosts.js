import classes from './FeaturedPosts.module.css';
import { PostsGrid } from '../posts/PostsGrid';

export const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
