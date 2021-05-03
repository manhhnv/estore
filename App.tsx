import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from 'estore/hooks/useCachedResources';
import useColorScheme from 'estore/hooks/useColorScheme';
import Navigation from 'estore/navigation';
import { Provider } from 'react-redux';
import store, { persistor } from 'estore/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';
import client from 'estore/graphql/config';
import { ActivityIndicator } from 'react-native';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return <ActivityIndicator color="red" size="large" />;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <ApolloProvider client={client}>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </ApolloProvider>
                    </PersistGate>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
