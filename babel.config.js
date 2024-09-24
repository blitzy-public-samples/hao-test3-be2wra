module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            ">0.25%",
            "not ie 11",
            "not op_mini all"
          ]
        },
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ],
  plugins: []
};

// TODO: Review and adjust browser targets based on project requirements and supported browsers
// TODO: Consider adding any necessary Babel plugins for specific JavaScript features or optimizations
// TODO: Ensure the Babel configuration aligns with the project's ESLint rules
// TODO: Verify that the Babel setup works correctly with the Webpack configuration
// TODO: Test the Babel configuration with the project's JavaScript files to ensure proper transpilation
// TODO: Update the README.md to include information about the Babel setup and any considerations for developers