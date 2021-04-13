// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//     uri: 'https://ebuy-ecommerce.herokuapp.com/graphql',
//     cache: new InMemoryCache()
// });

// export default client;
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from 'estore/redux/store';

const httpLink = createHttpLink({
    uri: 'https://ebuy-ecommerce.herokuapp.com/graphql'
})

const authLink = setContext((req, { headers }) => {
    const storeToken = store.getState().user.token
    return {
        headers: {
            ...headers,
            authorization: storeToken ? `Bearer ${storeToken}` : null
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client;