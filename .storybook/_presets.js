const path = require("path");

module.exports = [
  '@storybook/addon-docs/react/preset',
  {
    name: "@storybook/preset-typescript",
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, "./tsconfig.json")
      },
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, "./tsconfig.json"),
        transpileOnly: true
      },
      include: [path.resolve(__dirname, "../packages")]
    }
  }
];