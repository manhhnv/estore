import React, { useRef, MutableRefObject, useState, useEffect } from 'react';
import { Alert, Dimensions, Text, View, Animated, Touchable, TouchableOpacity } from 'react-native';
import { Input, CheckBox, Button, Image, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useLoginMutation } from 'estore/graphql/generated';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
const { height, width } = Dimensions.get('window');

const Register = () => {

    const navigation = useNavigation();
    const firstNameRef = useRef() as MutableRefObject<Input>;
    const lastNameRef = useRef() as MutableRefObject<Input>;
    const emailRef = useRef() as MutableRefObject<Input>;
    const passwordRef = useRef() as MutableRefObject<Input>;
    const confirmPasswordRef = useRef() as MutableRefObject<Input>;


    const [firstName, setFirstName] = useState({ value: '', error: true })
    const [lastName, setLastName] = useState({ vale: '', error: true })
    const [email, setEmail] = useState({ value: '', error: true });
    const [password, setPassword] = useState({ value: '', error: true });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: true });
    const [agree, setAgree] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState('');
    const [avatar, setAvatar] = useState({ localUri: '', filename: '' })
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const fadeAnim = useRef(new Animated.Value(0)).current
    const [executeLogin, { data, loading, error }] = useLoginMutation()
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled && result.type === "image") {
            setImage(result.uri);
            let localUri = result.uri;
            let filename = localUri.split('/').pop();
            setAvatar({ localUri: localUri, filename: filename ? filename : '' })
            let formData = new FormData();
            formData.append("avatar", localUri.replace("file:/", ""), filename)
            console.log(formData)
        }
    };
    const registerHandle = () => {
        console.log(avatar)
        let formData = new FormData();
        if (avatar.localUri) {
            formData.append("avatar", avatar.localUri?.replace("file:/", ""), avatar.filename)
            let data = {
                firstName: firstName.value,
                lastName: lastName.vale,
                email: email.value,
                password: password.value,
                avatar: formData.get('avatar')
            }
            console.log(data)
            axios.post('https://ebuy-ecommerce.herokuapp.com/api/users/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'accept': '*/*'
                }
            }).then(res => {
                console.log(res.data)
            })
                .catch(e => {
                    console.log(e)
                })
        }
    }
    useEffect(() => {
        if (error?.message) {
            Alert.alert("", "Email hoặc mật khẩu không chính xác !", [{ style: 'cancel' }], { cancelable: true })
        }
    }, [error])
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
                <Text style={styles.loginTitle}>Ebuy - Tạo tài khoản</Text>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        source={require('estore/assets/images/logo.png')}
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                    />
                </View>
                <View style={{ height: 1.6 * height }}>
                    <Input
                        label="Họ"
                        textContentType="familyName"
                        ref={firstNameRef}
                        onEndEditing={() => {
                            firstName.error ? firstNameRef.current.shake() : null;
                            lastNameRef.current.focus();
                        }}
                        value={firstName.value}
                        errorMessage={firstName.error ? "Bạn phải nhập họ và tên" : undefined}
                        containerStyle={{ marginTop: 10 }}
                        onChangeText={(text: string) => {
                            if (text) {
                                setFirstName({ value: text, error: false })
                            }
                            else {
                                setFirstName({ value: text, error: true })
                            }
                        }}
                        leftIcon={
                            <Icon
                                name='user'
                                type="font-awesome"
                            />
                        }
                    />
                    <Input
                        label="Tên"
                        textContentType="familyName"
                        ref={lastNameRef}
                        onEndEditing={() => {
                            lastName.error ? lastNameRef.current.shake() : null
                            emailRef?.current?.focus()
                        }}
                        value={lastName.vale}
                        errorMessage={lastName.error ? "Bạn phải nhập họ và tên" : undefined}
                        containerStyle={{ marginTop: 10 }}
                        onChangeText={(text: string) => {
                            if (text) {
                                setLastName({ vale: text, error: false })
                            }
                            else {
                                setLastName({ vale: text, error: true })
                            }
                        }}
                        leftIcon={
                            <Icon
                                name='user'
                                type="font-awesome"
                            />
                        }
                    />
                    <Input
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
                            confirmPasswordRef.current.focus()
                        }}
                        value={password.value}
                        secureTextEntry={!showPassword}
                        containerStyle={{ marginTop: 30 }}
                        errorMessage={
                            !password.value ? "Bạn phải nhập mật khẩu" :
                                password.value && password.error ?
                                    "Mật khẩu phải lớn hơn 8 ký tự bao gồm cả chữ và số" : undefined
                        }
                        onChangeText={(text: string) => {
                            if (passwordRegex.test(text)) {
                                setPassword({ value: text, error: false })
                            }
                            else {
                                setPassword({ value: text, error: true })
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
                    <Input
                        label="Nhập lại mật khẩu"
                        textContentType="password"
                        ref={confirmPasswordRef}
                        onEndEditing={() => {
                            confirmPassword.error ? confirmPasswordRef.current.shake() : null
                        }}
                        value={confirmPassword.value}
                        secureTextEntry={!showPassword}
                        containerStyle={{ marginTop: 30 }}
                        errorMessage={
                            !confirmPassword.value ? "Bạn phải nhập lại mật khẩu" :
                                confirmPassword.value && confirmPassword.error ? "Mật khẩu nhập lại không khớp" :
                                    undefined
                        }
                        onChangeText={(text: string) => {
                            if (text === password.value) {
                                setConfirmPassword({ value: text, error: false })
                            }
                            else {
                                setConfirmPassword({ value: text, error: true })
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
                    {!image ? <TouchableOpacity style={{
                        width: 0.5 * width, height: 0.2 * width,
                        backgroundColor: 'white',
                        borderRadius: 1,
                        borderStyle: "dotted",
                        borderColor: "black",
                        borderWidth: 2,
                        justifyContent: "center",
                        alignSelf: "center",
                        marginTop: 20
                    }} onPress={() => pickImage()}>
                        <Text style={{ textAlign: "center" }}>Chọn ảnh đại diện</Text>
                        <Icon type="antdesign" name="picture"></Icon>
                    </TouchableOpacity> : null}
                    {image ? (
                        <View>
                            <Image source={{ uri: image }} containerStyle={{ alignSelf: "center" }} style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <Icon type="antdesign" name="edit" size={30} onPress={pickImage} />
                        </View>
                    ) : null}
                    <CheckBox
                        checked={agree}
                        checkedColor="#07ac4f"
                        title="Tôi đồng ý với các điều khoản của Ebuy"
                        containerStyle={{ borderWidth: 0, backgroundColor: "white", marginTop: 20 }}
                        onPress={() => setAgree(!agree)}
                    />
                    <Button
                        title="Đăng ký"
                        titleStyle={{ textTransform: "uppercase", letterSpacing: 2 }}
                        containerStyle={{ width: 210, justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}
                        buttonStyle={{ backgroundColor: "#209f60", paddingVertical: 15 }}
                        loading={loading}
                        disabled={
                            firstName.error || lastName.error || email.error ||
                            password.error || confirmPassword.error || !agree
                        }
                        onPress={registerHandle}
                    />
                    <Text style={styles.registerAccountText} onPress={() => { navigation.navigate('login') }}>Đăng nhập ngay</Text>
                </View>
            </Animated.ScrollView>
            {loading ? <View style={styles.overlayLoadingContainer}></View> : null}
        </React.Fragment>
    )
}

export default React.memo(Register);
