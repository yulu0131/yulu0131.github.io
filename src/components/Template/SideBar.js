import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2>Yu Lu</h2>
        <p><a href="mailto:luyudso@gmail.com">luyudso@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yu. I am a <a href="https://www.smurfitschool.ie/">UCD Smurfit</a> graduate, Quantitaitive Finance Professional,
        Financial Engineer, Software Development Engineer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yu Lu <Link to="/">yulu0131.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
