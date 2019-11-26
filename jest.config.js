const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const esModules = [''].join('|');

module.exports = {
  cacheDirectory: '.jest-cache',
  clearMocks: false,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.test.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(test|spec).[jt]s', '**/__(tests|mocks)__/**/*.[jt]s'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  verbose: false
};
