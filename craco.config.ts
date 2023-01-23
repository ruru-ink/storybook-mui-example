const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
    },
  },
  jest: {
    configure: {
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      moduleDirectories: ['node_modules', '<rootDir>/'],
      moduleNameMapper: {
        '^@/components/(.+)': '<rootDir>/src/components/$1',
      },
      testEnvironment: 'jest-environment-jsdom',
    },
  },
};

export {};
