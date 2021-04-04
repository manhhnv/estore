import React, { useRef, useEffect } from 'react';
import { Alert, Text, View, Animated } from 'react-native';
import { Image, SocialIcon } from 'react-native-elements';
import {
    useLoginGoogleMutation,
    useLoginFaceBookMutation
} from 'estore/graphql/generated';
import styles from './styles';
import { firebaseConfig } from './config';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import * as Facebook from 'expo-facebook';
import { useNavigation } from '@react-navigation/core';
import { UserSliceType } from 'estore/redux/slice/userSlice';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

type LoginProps = {
    login: ActionCreatorWithPayload<UserSliceType, string>;
};

const Login = ({ login }: LoginProps) => {
    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId:
                    '291390072934-pb0netoo96rrmcbjqfjkm639887h9d0r.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
                androidStandaloneAppClientId:
                    '291390072934-pb0netoo96rrmcbjqfjkm639887h9d0r.apps.googleusercontent.com',
                iosClientId:
                    '291390072934-jeeq8ngcqm258p7rit4jlqcn31sjsk7v.apps.googleusercontent.com',
                iosStandaloneAppClientId:
                    '291390072934-jeeq8ngcqm258p7rit4jlqcn31sjsk7v.apps.googleusercontent.com'
            });
            if (result.type == 'success') {
                if (result.accessToken) {
                    executeGoogleLogin({
                        variables: { accessToken: result.accessToken }
                    });
                }
            }
        } catch (e) {
            return e;
        }
    };
    const signInWithFacebookAsync = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '554013235570481'
            });
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email']
            });
            if (result.type === 'success') {
                executeFacebookLogin({
                    variables: { accessToken: result.token }
                });
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [
        executeGoogleLogin,
        { data, loading, error }
    ] = useLoginGoogleMutation();
    const [
        executeFacebookLogin,
        { data: fbData, loading: fbLoading, error: fbError }
    ] = useLoginFaceBookMutation();
    const navigation = useNavigation();

    useEffect(() => {
        if (error?.message) {
            Alert.alert(
                '',
                'Email hoặc mật khẩu không chính xác !',
                [{ style: 'cancel' }],
                { cancelable: true }
            );
        }
    }, [error]);
    useEffect(() => {
        if (data?.loginGoogle?.token && data?.loginGoogle?.user) {
            if (login) {
                login({
                    token: data.loginGoogle.token,
                    me: data.loginGoogle.user
                });
                navigation.navigate('Home');
            }
        }
    }, [data]);
    useEffect(() => {
        if (fbData?.loginFaceBook.user && fbData.loginFaceBook.token) {
            if (login) {
                login({
                    token: fbData.loginFaceBook.token,
                    me: fbData.loginFaceBook.user
                });
                navigation.navigate('Home');
            }
        }
    }, [fbData]);
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, [fadeAnim]);
    return (
        <React.Fragment>
            <Animated.ScrollView
                style={[styles.loginContainer, { opacity: fadeAnim }]}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.loginTitle}>Ebuy - Đăng nhập</Text>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        source={require('estore/assets/images/logo.png')}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                    />
                </View>
                <View>
                    <SocialIcon
                        title="Continue With Google"
                        button
                        type="google"
                        onPress={() => signInWithGoogleAsync()}
                        style={{ marginTop: 75 }}
                        loading={loading}
                    />
                    <SocialIcon
                        title="Continue With Facebook"
                        button
                        type="facebook"
                        onPress={() => signInWithFacebookAsync()}
                        style={{ marginTop: 20 }}
                        loading={fbLoading}
                    />
                </View>
            </Animated.ScrollView>
            {loading || fbLoading ? (
                <View style={styles.overlayLoadingContainer}></View>
            ) : null}
        </React.Fragment>
    );
};
export default (React.memo(Login));
