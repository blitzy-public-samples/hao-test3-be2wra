// Jest configuration for the Hello World web application

module.exports = {
  // Verbosity level for test output
  verbose: true,

  // Use jsdom as the test environment to simulate a browser-like environment
  testEnvironment: 'jsdom',

  // File extensions Jest will look for when running tests
  moduleFileExtensions: ['js', 'json'],

  // Transform JavaScript files using babel-jest
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Enable code coverage collection
  collectCoverage: true,

  // Directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Coverage report formats
  coverageReporters: ['text', 'lcov'],

  // Patterns to ignore when looking for test files
  testPathIgnorePatterns: ['/node_modules/'],

  // Files to run before each test file
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],

  // Add more configuration options as needed for the project
  // For example:
  // testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },
  // snapshotSerializers: [],
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1'
  // }
};

// TODO: Review and adjust the Jest configuration based on project-specific testing requirements
// TODO: Ensure all necessary Jest plugins and presets are installed and configured correctly
// TODO: Set up any global test setup or teardown procedures in the 'tests/setup.js' file
// TODO: Configure code coverage thresholds if required for the project
// TODO: Add any custom matchers or test utilities that might be needed for the project
// TODO: Verify that the Jest configuration works with the project's actual test files
// TODO: Update the README.md to include information about running tests and interpreting results
// TODO: Consider adding snapshot testing configuration if it will be used in the project
// TODO: Ensure the Jest configuration aligns with the project's ESLint and Babel setups