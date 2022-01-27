export default {
    clearMocks: true,
    coverageProvider: "v8",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    roots: ["<rootDir>/src"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/src/$1',
        '^@models/(.*)': '<rootDir>/src/models/$1',
        '^@routes/(.*)': '<rootDir>/src/routes/$1',
        '^@controllers/(.*)': '<rootDir>/src/controllers/$1',
        '^@middleware/(.*)': '<rootDir>/src/middleware/$1',
        '^@schemas/(.*)': '<rootDir>/src/schemas/$1',
    },
};
