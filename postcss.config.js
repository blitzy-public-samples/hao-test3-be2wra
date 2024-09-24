module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ],
  autoprefixer: {
    browsers: [
      '>0.25%',
      'not ie 11',
      'not op_mini all'
    ]
  },
  cssnano: {
    preset: 'default'
  }
};

// TODO: Review and adjust browser targets in the autoprefixer configuration to align with project requirements
// TODO: Consider adding additional PostCSS plugins based on project needs (e.g., postcss-preset-env for future CSS features)
// TODO: Ensure the PostCSS configuration works correctly with the Webpack and CSS processing pipeline
// TODO: Test the PostCSS setup with the project's CSS files to verify proper transformations
// TODO: Update the README.md to include information about the PostCSS setup and any considerations for developers
// TODO: Verify that the PostCSS configuration aligns with the project's browser support goals
// TODO: Consider adding environment-specific configurations if needed (e.g., disabling minification in development)