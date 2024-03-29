import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Research from '../components/Resume/Research';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import research from '../data/resume/research';
import { skills, categories } from '../data/resume/skills';

const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Research: () => <Research data={research} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const About = () => (
  <Main
    title="About "
    description="Yu Lu's About Me."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="about">About Me</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);
export default About;
