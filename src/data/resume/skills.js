const skills = [
  {
    title: 'C++',
    competency: 5,
    category: ['Languages', 'Financial Modelling'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Data Engineering', 'ML Engineering', 'Financial Modelling'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'JQuery',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'DL Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Mongoose',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PhotoShop',
    competency: 4,
    category: ['Web Design'],
  },
  {
    title: 'CUDA',
    competency: 4,
    category: ['Languages', 'C++'],
  },
  {
    title: 'Axure',
    competency: 4,
    category: ['UX Protoype'],
  },
  {
    title: 'MATLAB',
    competency: 5,
    category: ['Languages', 'Financial Modelling'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages', 'Financial Modelling'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Machine Learning',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Deep Learning',
    competency: 3,
    category: ['DL Engineering'],
  },
  {
    title: 'Plotly.js',
    competency: 2,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
