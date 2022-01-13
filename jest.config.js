module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: __dirname,
    setupFilesAfterEnv: [
        '<rootDir>/test/helper.ts'
    ],
    testMatch: [
        '<rootDir>/test/**/*.spec.ts'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.ts?$': 'ts-jest',
    },
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    transformIgnorePatterns: [
        '/node_modules/(?!d3-(interpolate|color))',
    ],
    // transformIgnorePatterns: ["/node_modules\/(?!(d3\-ease|d3\-interpolate)\/)/", "\\.pnp\\.[^\\\/]+$"],
};