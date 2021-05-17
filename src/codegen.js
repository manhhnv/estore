module.exports = {
    schema: `http://192.168.0.104:5000/graphql`,
    documents: ['./**/**/*.graphql', './**/**/**/*.graphql'],
    overwrite: true,
    generates: {
        './src/graphql/generated/index.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
                'fragment-matcher'
            ],
            config: {
                reactApolloVersion: 3,
                withHooks: true,
                withComponent: false,
                withHOC: false
            }
        }
    }
};
