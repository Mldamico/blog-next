import Image from 'next/image';
import classes from './hero.module.css';
export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/unknown.jpeg'
          alt='An Image showing Matias'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Matias</h1>
      <p>
        I blog about web and mobile developtment. Like React and React Native,
        and something more.
      </p>
    </section>
  );
};
