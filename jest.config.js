// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // A set of global variables that need to be available in all test environments
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
            babelConfig: true,
        },
        __VERSION__: '0.0.0',
    },

    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
        '\\.(scss|sass|css|less|nomangle)$': 'identity-obj-proxy',
    },
    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    modulePathIgnorePatterns: ['<rootDir>/dist'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.svg$': '<rootDir>/test/assetsTransformer.js',
    },
    setupFilesAfterEnv: ['<rootDir>/test/setupTest.tsx'],
    setupFiles: ['core-js'],
    reporters: ['default', ['jest-junit', { suiteName: 'Team User jest tests' }]],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/*.test.{ts,tsx}',
        '!**/test/*.{ts,tsx}',
        '!**/index.tsx',
        '!**/src/constants/**',
        '!**/src/models/**',
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 90,
            statements: 80,
        },
    },
};
