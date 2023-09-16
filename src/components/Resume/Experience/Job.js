import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import './container.css';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4 className="container">
        <a href={url}>{name}</a>
        <span>{position}</span>
      </h4>
      <p className="daterange"> {dayjs(startDate).format('MMMM YYYY')} - {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}</p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
