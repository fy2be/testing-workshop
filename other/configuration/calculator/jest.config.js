module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
        '\\.css$': require.resolve('./test/style-mock')
    }
};