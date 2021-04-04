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

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    useEffect(() => {
        (async () =>
            await Font.loadAsync({
                'nunito-regular': require('estore/assets/fonts/Nunito-Regular.ttf'),
                'nunito-bold': require('estore/assets/fonts/Nunito-Bold.ttf'),
                oswald: require('estore/assets/fonts/Oswald-VariableFont_wght.ttf'),
                castoro: require('estore/assets/fonts/Castoro-Regular.ttf')
            }))();
    }, []);

    if (!isLoadingComplete) {
        return null;
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
