module.exports = {
  '*.[jt]s': ['npm run lint:fix', 'npm run test:staged', 'git add']
};
