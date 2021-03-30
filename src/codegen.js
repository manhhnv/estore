module.exports = {
    schema: `https://ebuy-ecommerce.herokuapp.com/graphql`,
    documents: ["./**/**/*.graphql"],
    overwrite: true,
    generates: {
        './src/graphql/generated/index.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
                'fragment-matcher',
            ],
            config: {
                reactApolloVersion: 3,
                withHooks: true,
                withComponent: false,
                withHOC: false,
            },
        },
    },
};