import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yu Lu's personal website. UCD Michael Smurfit School Finance Graduate, "
    + 'Financial Engineer in a leading Fintech Company.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Introduction</Link></h2>
          <p>
            I am a financial engineer concentrated on financial modelling.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/yulu0131/yulu0131.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
