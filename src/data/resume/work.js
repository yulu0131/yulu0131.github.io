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
    summary: 'Fintech company concentrated on risk modelling, derivative valuation, financial data, front desk deal, etc.',
    highlights: [
      'Engineered an advanced C++ library, benchmarking the efficacy of multiple pricing engines, encompassing the optimization of Monte Carlo simulation techniques via CPU and GPU integrations, finite difference approaches, and quadratic pricing methodologies. Demonstrated proficiency in cross-platform development across Linux, MacOS, and Windows environments.',
      'Conducted intricate intraday trading analyses in the Chinese ETF market, leveraging strategies derived from proprietary pricing engines using C++. Possess specialized expertise in pricing and hedging Asian-style options within the energy sector.',
      'Employed advanced quantitative techniques utilizing Python and SQL to engineer web-service volatility surfaces, integrating stochastic volatility models such as SSVI, SABR, and Heston, along with the local volatility surface via finite difference methods and machine learning strategies. Independently conceptualized and developed the Optshare Python package, now available on PyPI.',
      'Conducted in-depth analysis of interest rate derivative pricing, emphasizing short-term rate and LMM-class models. Spearheaded the design and development of a sophisticated OTC interest rate option pricing tool, pivotal for clients in enhancing trading, pricing, and hedging activities within the Chinese OTC market.  Demonstrated proficiency in FICC products, encompassing areas such as interest rate derivatives, quanto options, and foreign currency instruments.',
      'Contributed to the pricing mechanisms of new structured products within the OTC system, employing C++, JavaScript, and the UX design tool, Axure. Possess robust expertise in web development frameworks and libraries, including jQuery, React, Django, and the C++ Mongoose framework.',
      'Undertook comprehensive research into contemporary advancements in derivative risk and pricing modeling in academic circles, with a specific focus on the integration of deep learning techniques for option pricing.',
    ],
  },
];

export default work;
