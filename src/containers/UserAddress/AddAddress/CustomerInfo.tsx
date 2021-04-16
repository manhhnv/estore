import React, { useRef, useState, MutableRefObject, SetStateAction } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AntDesignIcon from '@expo/vector-icons/build/AntDesign';
import { customerInfoStyles } from './styles';
import { UserAddressFields } from './types';

type CustomerInfoProps = {
    setStep: React.Dispatch<SetStateAction<number>>;
}

const CustomerInfo = ({ setStep }: CustomerInfoProps) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const blankErrorMessage = "Bạn phải nhập đầy đủ";
    const formatErrorMessage = "Sai định dạng";

    const [firstName, setFirstName] = useState({ value: '', isValid: false });
    const [lastName, setLastName] = useState({ value: '', isValid: false });
    const [phoneNumber, setPhoneNumber] = useState({ value: '', isValid: false });
    const [email, setEmail] = useState({ value: '', isValid: false });

    const firstNameRef = useRef<typeof Input>() as MutableRefObject<typeof Input>;
    const lastNameRef = useRef<typeof Input>() as MutableRefObject<typeof Input>;
    const phoneNumberRef = useRef<typeof Input>() as MutableRefObject<typeof Input>;
    const emailRef = useRef<typeof Input>() as MutableRefObject<typeof Input>;

    const addressFieldOnChange = (fieldName: UserAddressFields, value: string) => {
        switch (fieldName) {
            case UserAddressFields.email:
                if (emailRegex.test(value) === true) {
                    setEmail({ value: value, isValid: true });
                }
                else {
                    setEmail({ value: value, isValid: false });
                }
                break;
            case UserAddressFields.firstName:
                if (value == "" || !value) {
                    setFirstName({ value: value, isValid: false })
                }
                else {
                    setFirstName({ value: value, isValid: true })
                }
                break;
            case UserAddressFields.lastName:
                if (value == "" || !value) {
                    setLastName({ value: value, isValid: false })
                }
                else {
                    setLastName({ value: value, isValid: true })
                }
                break;
            case UserAddressFields.phoneNumber:
                if (value == "" || !value) {
                    setPhoneNumber({ value: value, isValid: false })
                }
                else {
                    setPhoneNumber({ value: value, isValid: true })
                }
                break;
            default:
                break;
        }
    }

    return (
        <View style={customerInfoStyles.container}>
            <Input
                label="Họ"
                leftIcon={
                    <AntDesignIcon
                        name="user"
                        size={24}
                    />
                }
                labelStyle={{ marginTop: 10 }}
                textContentType="familyName"
                ref={firstNameRef}
                value={firstName.value}
                key={1}
                errorMessage={
                    !firstName.value ? blankErrorMessage :
                        firstName.value && !firstName.isValid ?
                            formatErrorMessage :
                            undefined
                }
                onChangeText={(text: string) => addressFieldOnChange(UserAddressFields.firstName, text)}
                onSubmitEditing={() => {
                    if (!firstName.isValid) {
                        firstNameRef?.current?.shake();
                    }
                    lastNameRef?.current?.focus();
                }}
            />
            <Input
                label="Tên"
                leftIcon={
                    <AntDesignIcon
                        name="user"
                        size={24}
                    />
                }
                labelStyle={{ marginTop: 10 }}
                textContentType="givenName"
                ref={lastNameRef}
                value={lastName.value}
                key={2}
                errorMessage={
                    !lastName.value ? blankErrorMessage :
                        lastName.value && !lastName.isValid ?
                            formatErrorMessage :
                            undefined
                }
                onChangeText={(text: string) => addressFieldOnChange(UserAddressFields.lastName, text)}
                onSubmitEditing={() => {
                    if (!lastName.isValid) {
                        lastNameRef?.current?.shake();
                    }
                    phoneNumberRef?.current?.focus();
                }}
            />
            <Input
                label="Điện thoại"
                leftIcon={
                    <AntDesignIcon
                        name="phone"
                        size={24}
                    />
                }
                labelStyle={{ marginTop: 10 }}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                ref={phoneNumberRef}
                value={phoneNumber.value}
                key={3}
                errorMessage={
                    !phoneNumber.value ? blankErrorMessage :
                        phoneNumber.value && !phoneNumber.isValid ?
                            formatErrorMessage :
                            undefined
                }
                onChangeText={(text: string) => addressFieldOnChange(UserAddressFields.phoneNumber, text)}
                onSubmitEditing={() => {
                    if (!phoneNumber.isValid) {
                        phoneNumberRef?.current?.shake();
                    }
                    emailRef?.current?.focus();
                }}
            />
            <Input
                label="Email"
                leftIcon={
                    <AntDesignIcon
                        name="mail"
                        size={24}
                    />
                }
                labelStyle={{ marginTop: 10 }}
                keyboardType="email-address"
                textContentType="emailAddress"
                ref={emailRef}
                value={email.value}
                key={4}
                errorMessage={
                    !email.value ?
                        blankErrorMessage :
                        email.value && !email.isValid ?
                            formatErrorMessage :
                            undefined
                }
                onChangeText={(text: string) => addressFieldOnChange(UserAddressFields.email, text)}
                onSubmitEditing={() => {
                    if (!email.isValid) {
                        emailRef?.current?.shake();
                    }
                }}
            />
            <Button
                title="TIẾP THEO"
                containerStyle={customerInfoStyles.nextStepButton}
                buttonStyle={{ backgroundColor: '#ee4d2d' }}
                titleStyle={{ letterSpacing: 1 }}
                onPress={() => setStep(2)}
            />
        </View>
    )
}
export default React.memo(CustomerInfo)
