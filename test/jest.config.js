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
    // transformIgnorePatterns: ["/node_modules/(?!(d3\-ease|d3\-interpolate)/)", "\\.pnp\\.[^\\\/]+$"],
};