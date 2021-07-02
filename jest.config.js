module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testMatch: ['<rootDir>/test/*.ts'], // ignore emails
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
};
