import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from 'estore/redux/store';

const httpLink = createHttpLink({
    uri: 'https://ebuy-ecommerce.herokuapp.com/graphql'
});

const authLink = setContext((req, { headers }) => {
    const storedToken = store.getState().user.token;
    return {
        headers: {
            ...headers,
            authorization: storedToken ? `Bearer ${storedToken}` : null
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
