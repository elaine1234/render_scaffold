module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: __dirname,
    setupFilesAfterEnv: [
        '<rootDir>/helper.ts'
    ],
    testMatch: [
        '<rootDir>/**/*.spec.ts'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!d3-(interpolate|color))',
    ],
    // transformIgnorePatterns: ["/node_modules\/(?!(d3\-ease|d3\-interpolate)\/)/", "\\.pnp\\.[^\\\/]+$"],
};