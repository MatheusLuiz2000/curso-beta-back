module.exports = {
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/app/**/*.ts'],
    coverageDirectory: '__tests__/coverage',
    coverageReporters: ['text', 'lcov'],
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    transform: {
        '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
    }
};
