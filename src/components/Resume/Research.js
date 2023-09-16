import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Research = ({ data }) => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Research Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Research.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Research.defaultProps = {
  data: [],
};

export default Research;
