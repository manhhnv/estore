import React, { SetStateAction, useEffect, useState, Dispatch } from 'react';
import { ProgressBar, ProgressItem } from 'estore/components/ProgressBar';
import { ScrollView } from 'react-native-gesture-handler';
import CustomerInfo from './CustomerInfo';
import AddressInfo from './AddressInfo';
import OtherInfo from './OtherInfo';
import {
    NavigationProp,
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';

export type PersonalInfoType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
};

export type AddressInfoType = {
    city: {
        name: string;
        id: number;
    };
    state: {
        name: string;
        id: number;
    };
    ward: string;
    streetLine1: string;
    isDefault: boolean;
};

export type OtherInfoType = {
    description?: string;
    receivedTime?: string;
};

const AddAddress = () => {
    const [step, setStep] = useState(1);
    const [personalInfo, setPersonalInfo]: [
        PersonalInfoType,
        Dispatch<SetStateAction<PersonalInfoType>>
    ] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    });
    const [addressInfo, setAddressInfo]: [
        AddressInfoType,
        Dispatch<SetStateAction<AddressInfoType>>
    ] = useState({
        city: {
            name: '',
            id: -1
        },
        state: {
            name: '',
            id: -1
        },
        ward: '',
        streetLine1: '',
        isDefault: Boolean(false)
    });
    const [otherInfo, setOtherInfo]: [
        OtherInfoType,
        Dispatch<SetStateAction<OtherInfoType>>
    ] = useState({});
    const route = useRoute<RouteProp<RootStackParamList, 'addUserAddress'>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const steps = (
        <ProgressBar>
            <ProgressItem
                name="Thông tin người nhận"
                alias="Bước 1"
                completed={step > 1}
                active={step === 1}
                queuing={step === 1}
                onPress={() => setStep(1)}
            />
            <ProgressItem
                name="Địa chỉ nhận hàng"
                alias="Bước 2"
                completed={step > 2}
                active={step === 2}
                queuing={step < 2}
                onPress={() => setStep(2)}
            />
            <ProgressItem
                name="Thông tin khác"
                alias="Bước 3"
                completed={step > 3}
                active={step === 3}
                queuing={step < 3}
                onPress={() => setStep(3)}
            />
        </ProgressBar>
    );
    let currentComponent = null;
    if (step === 1) {
        currentComponent = (
            <CustomerInfo
                setStep={setStep}
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
            />
        );
    } else if (step === 2) {
        currentComponent = (
            <AddressInfo
                setStep={setStep}
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}
            />
        );
    } else if (step === 3) {
        currentComponent = (
            <OtherInfo
                otherInfo={otherInfo}
                setOtherInfo={setOtherInfo}
                personalInfo={personalInfo}
                addressInfo={addressInfo}
                navigation={navigation}
                route={route}
            />
        );
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {steps}
            {currentComponent}
        </ScrollView>
    );
};
export default AddAddress;
