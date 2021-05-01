import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export default function LoadingComponent() {
    return (
        <React.Fragment>
            <View style={styles.overLoadingContainer}></View>
            <ActivityIndicator
                color="#ee4d2d"
                size="large"
                style={styles.activityIndicator}
            />
        </React.Fragment>
    );
}
