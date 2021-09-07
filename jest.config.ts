module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/context/*.ts(x)', '!src/index.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
