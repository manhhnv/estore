import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('estore/assets/fonts/SpaceMono-Regular.ttf'),
                    'nunito-regular': require('estore/assets/fonts/Nunito-Regular.ttf'),
                    'nunito-bold': require('estore/assets/fonts/Nunito-Bold.ttf'),
                    oswald: require('estore/assets/fonts/Oswald-VariableFont_wght.ttf'),
                    castoro: require('estore/assets/fonts/Castoro-Regular.ttf')
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
