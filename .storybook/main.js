/*module.exports = {
  "stories": [
    "../src/*.stories.mdx",
    "../src/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}*/


module.exports = {
  stories: ['../src/*.stories.js'],
   staticDir: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/preset-create-react-app',
     '@storybook/addon-interactions',
   ],
   framework: '@storybook/react',
   core: {
     builder: '@storybook/builder-webpack5',
   },
   features: {
     interactionsDebugger: true,
   },
 };