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
const research = [
  {
    name: 'Optimization of the Monte Carlo Simulation Methods in the Over-the-Counter Derivative Pricing',
    position: '',
    url: '',
    startDate: '2022-07',
    endDate: '2023-07',
    summary: 'Collaborated with a national-level financial innovation laboratory. Addressed the OTC derivatives market challenges in China, focusing on pricing optimization',
    highlights: [
      'Developed an advanced Monte Carlo engine utilizing modern algorithms and enhanced stochastic process discretization. Incorporated the FASTNORM Algorithm, tripling computational efficiency.',
      'Leveraged vectorization and OpenMP-based multi-threading programming techniques in contemporary CPU architectures, boosting computing speeds by 40x.',
      'Implemented a GPU-driven Monte Carlo algorithm, realizing a speed increase of over 100x compared to traditional methods.',
    ],
  },
  {
    name: 'Advanced Pricing Models for Interest Rate Derivatives: An In-depth Analysis of the Over-the-Counter Derivative Market in China.',
    position: '',
    url: '',
    startDate: '2023-07',
    summary: 'Comprehensive analysis of interest rate models within the Chinese financial derivative markets.',
    highlights: [
      'Delved into the complexities of options intricately linked to key benchmarks such as the Loan Prime Rate (LPR) and Shanghai Interbank Offered Rate (SHIBOR).',
      'Conducted a comprehensive examination of interest rate derivative pricing, emphasizing short-term rate and LMM-class models.',
      'Orchestrated the design and evolution of an advanced OTC interest rate option pricing tool, essential for clientele in the Chinese OTC environment, optimizing trading, pricing, and hedging operations.',
      'Undertook an empirical investigation, striving for clarity on methodologies and implications of each model in the context of contemporary interest rate derivatives.',
    ],
  },
  {
    name: 'Empirical Analysis of Volatility Modelling Using Chinese Intraday Option Data',
    position: '',
    url: 'https://voladocs.readthedocs.io/',
    startDate: '2023-01',
    summary: 'Python Interface with Machine Learning-Enhanced Modeling.',
    highlights: [
      'Utilized Python and SQL for efficient data processing and developed the research-oriented Optshare package, available on PyPI.',
      'Developed volatility surfaces encompassing local volatility, stochastic volatility (including SSVI-class, SABR-class, and Heston models), and stochastic local volatility (SLV) frameworks.',
      'Leveraged advanced numerical methods, including finite difference, fast Fourier transform, and quadratic integration, combined with machine learning techniques to align with intraday option data, optimizing computational efficiency.',
    ],
  },
  {
    name: 'Prospect theory and asset prices: an empirical test in the context of the Covid-19 pandemic period',
    position: '',
    url: '',
    startDate: '2021-03',
    endDate: '2021-09',
    summary: 'Master Thesis in Smurfit',
    highlights: [
      'Conducted an empirical dissertation on "Prospect Theory and Asset Prices" during the Covid-19 pandemic under Dr. Anita Suurlaht at Smurfit',
      'Devised a 7-Factor CAPM model, and performed cross-sectional analysis of prospect theory against U.S. and Asian stock market data using R and Stata',
    ],
  },
];

export default research;
