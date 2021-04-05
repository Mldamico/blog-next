import React from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import classes from './MainNavigation.module.css';
export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
