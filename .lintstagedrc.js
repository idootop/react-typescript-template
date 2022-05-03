module.exports = {
  '*.{js,jsx,ts,tsx}': 'npx eslint --fix',
  '*.{css,sass,scss}': 'npx stylelint --fix',
  '*.{js,ts,jsx,tsx,css,sass,scss,md,json}': 'npx prettier --write',
};
