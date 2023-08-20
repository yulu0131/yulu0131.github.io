/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'YieldChain Co.',
    position: 'Financial Engineer',
    url: '',
    startDate: '2021-09',
    summary: `Fintech company concentrated on risk modelling, derivative valuation, financial data, front desk deal, etc.`,
    highlights: [
      'Developed C++ library and tested the efficiency of more than 3 pricing engines, such as accelerating Monte Carlo simulation methods with CPU and GPU hardware programming, finite difference, and quadratic pricing methods. Advanced in cross-platform development, including Linux, MacOS, and Windows',
      'Analyzed intraday trading in the Chinese ETF market based on the trading strategy developed from the pricing engines using C++. Experienced in pricing and hedging Asian- style options within the energy market',
      'Utilized Python and SQL to provide web-service volatility surfaces. Constructed the local volatility surface using the finite difference method and machine learning techniques. Developed a Python package called Optshare independently, available on the PyPI website',
      'Supported the new structured product pricing of the OTC system using C++, JavaScript and UX design tool Axure. Advanced in jQuery, React, Django and C++ mongoose web framework',
      'Researched updated findings of derivative risk and pricing modelling in academia, including applying deep learning techniques in option pricing'
    ],
  },
];

export default work;
