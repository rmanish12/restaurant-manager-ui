import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['./tests/index.ts'],
  coverageProvider: 'babel',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      statements: 10,
      functions: 10,
      branches: 10,
      lines: 10,
    },
  },
};

export default config;
