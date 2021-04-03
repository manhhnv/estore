import React, { useRef, MutableRefObject, useState, useEffect } from 'react';
import { Alert, Dimensions, ScrollView, Text, View, Animated } from 'react-native';
import { Input, CheckBox, Button, Image, Icon, SocialIcon } from 'react-native-elements';
import { useLoginMutation } from 'estore/graphql/generated';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingStackParamList } from 'estore/types';
import { firebaseConfig } from './config';
import firebase from 'firebase';
import Expo from 'expo';
import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import { UserSliceType, login } from 'estore/redux/slice/userSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import * as Facebook from 'expo-facebook';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const { height } = Dimensions.get('window');

type LoginProps = {
    navigation: StackNavigationProp<SettingStackParamList, "login">;
    user?: UserSliceType;
    login?: ActionCreatorWithPayload<UserSliceType, string>
}

const Login = ({ navigation, user, login }: LoginProps) => {

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '291390072934-pb0netoo96rrmcbjqfjkm639887h9d0r.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
                androidStandaloneAppClientId: '291390072934-pb0netoo96rrmcbjqfjkm639887h9d0r.apps.googleusercontent.com',
                iosClientId: '291390072934-jeeq8ngcqm258p7rit4jlqcn31sjsk7v.apps.googleusercontent.com',
                iosStandaloneAppClientId: '291390072934-jeeq8ngcqm258p7rit4jlqcn31sjsk7v.apps.googleusercontent.com',
            })
            if (result.type == 'success') {
                if (result.accessToken) {
                    executeLogin({ variables: { accessToken: result.accessToken } })
                }
            }
        }
        catch (e) {
            return e;
        }
    }

    const signInWithFacebookAsync = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '447591346548238',
            });
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (result.type === 'success') {
                // console.log(result)
                const response = await fetch(`https://graph.facebook.com/me?access_token=${result.token}&fields=id,name,first_name,last_name,picture.type(large)`);
                const data = await response.json()
                console.log(data)
                Alert.alert('Logged in!', `Hi ${data.name}!`);
            }
            else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const emailRef = useRef() as MutableRefObject<Input>;
    const passwordRef = useRef() as MutableRefObject<Input>;
    const [email, setEmail] = useState({ value: '', error: true });
    const [password, setPassword] = useState({ value: '', error: true });
    const [remember, setRemember] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const fadeAnim = useRef(new Animated.Value(0)).current
    const [executeLogin, { data, loading, error }] = useLoginMutation()
    useEffect(() => {
        if (error?.message) {
            Alert.alert("", "Email hoặc mật khẩu không chính xác !", [{ style: 'cancel' }], { cancelable: true })
        }
    }, [error])
    useEffect(() => {
        if (data?.login?.token && data?.login?.user) {
            if (login) {
                login({ token: data.login.token, me: data.login.user })
                navigation.navigate("Home")
            }
        }
    }, [data])
    useEffect(() => {
        console.log("usera", user)
    }, [user])
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }, [fadeAnim])
    return (
        <React.Fragment>
            <Animated.ScrollView style={[styles.loginContainer, { opacity: fadeAnim }]} showsVerticalScrollIndicator={false}>
                <Text style={styles.loginTitle}>Ebuy - Đăng nhập</Text>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        source={require('estore/assets/images/logo.png')}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                    />
                </View>
                <View>
                    {/* <Input
                        label="Email"
                        textContentType="emailAddress"
                        ref={emailRef}
                        onEndEditing={() => {
                            email.error ? emailRef.current.shake() : null;
                            passwordRef.current.focus()
                        }}
                        value={email.value}
                        errorMessage={email.value == '' ? "Bạn phải nhập email" : email.value && email.error ? "Sai định dạng email" : undefined}
                        containerStyle={{ marginTop: 10 }}
                        onChangeText={(text: string) => {
                            if (emailRegex.test(text)) {
                                setEmail({ value: text, error: false })
                            }
                            else {
                                setEmail({ error: true, value: text })
                            }
                        }}
                        leftIcon={
                            <Icon
                                name='email'
                            />
                        }
                    />
                    <Input
                        label="Mật khẩu"
                        textContentType="password"
                        ref={passwordRef}
                        onEndEditing={() => {
                            password.error ? passwordRef.current.shake() : null;
                        }}
                        value={password.value}
                        secureTextEntry={!showPassword}
                        containerStyle={{ marginTop: 30 }}
                        errorMessage={password.error ? "Bạn phải nhập mật khẩu" : undefined}
                        onChangeText={(text: string) => {
                            if (text) {
                                setPassword({ value: text, error: false })
                            }
                            else {
                                setPassword({ error: true, value: text })
                            }
                        }}
                        leftIcon={
                            <Icon
                                name='lock'
                            />
                        }
                        rightIcon={
                            showPassword ?
                                <Icon
                                    name='eye'
                                    type='ionicon'
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                                :
                                <Icon
                                    name='eye-off'
                                    type='ionicon'
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                        }
                    />
                    <CheckBox
                        checked={remember}
                        checkedColor="#07ac4f"
                        title="Ghi nhớ"
                        containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                        onPress={() => setRemember(!remember)}
                    /> */}
                    {/* <Button
                        title="Đăng nhập"
                        titleStyle={{ textTransform: "uppercase", letterSpacing: 2 }}
                        containerStyle={{ width: 210, justifyContent: 'center', alignSelf: 'center' }}
                        buttonStyle={{ backgroundColor: "#209f60", paddingVertical: 15 }}
                        loading={loading}
                        // onPress={() => executeLogin({ variables: { email: email.value, password: password.value } })}
                        // disabled={password.error || email.error}
                        onPress={() => signInWithGoogleAsync()}
                    /> */}
                    <SocialIcon
                        title='Continue With Google'
                        button
                        type='google'
                        onPress={() => signInWithGoogleAsync()}
                        style={{ marginTop: 75 }}
                        loading={loading}
                    />
                    <SocialIcon
                        title='Continue With Facebook'
                        button
                        type='facebook'
                        onPress={() => signInWithFacebookAsync()}
                        style={{ marginTop: 20 }}
                    // loading={loading}
                    />
                    {/* <Text
                        style={styles.registerAccountText}
                        onPress={() => navigation.navigate('register')}
                    >Tạo tài khoản</Text> */}
                </View>
            </Animated.ScrollView>
            {loading ? <View style={styles.overlayLoadingContainer}></View> : null}
        </React.Fragment>
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = { login }
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login))
// import React from 'react';
// import { Text, View } from 'react-native';
// import * as GoogleSignIn from 'expo-google-sign-in';
// import * as AppAuth from 'expo-app-auth';
// const { URLSchemes } = AppAuth;

// export default class AuthScreen extends React.Component {
//   state = { user: null };

//   componentDidMount() {
//     this.initAsync();
//   }

//   initAsync = async () => {
//     await GoogleSignIn.initAsync();
//     this._syncUserWithStateAsync();
//   };

//   _syncUserWithStateAsync = async () => {
//     const user = await GoogleSignIn.signInSilentlyAsync();
//     this.setState({ user });
//   };

//   signOutAsync = async () => {
//     await GoogleSignIn.signOutAsync();
//     this.setState({ user: null });
//   };

//   signInAsync = async () => {
//     try {
//       await GoogleSignIn.askForPlayServicesAsync();
//       const { type, user } = await GoogleSignIn.signInAsync();
//       if (type === 'success') {
//         this._syncUserWithStateAsync();
//       }
//     } catch ({ message }) {
//       alert('login: Error:' + message);
//     }
//   };

//   onPress = () => {
//     if (this.state.user) {
//       this.signOutAsync();
//     } else {
//       this.signInAsync();
//     }
//   };

//   render() {
//     return (
//         <View style={{ flex: 1 }}>
//             <Text style={{marginTop: 200}} onPress={this.onPress}>Toggle Auth</Text>
//         </View>
//     )
//   }
// }