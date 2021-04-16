import React, { useEffect, useState } from 'react';
import { ProgressBar, ProgressItem } from 'estore/components/ProgressBar';
import { ScrollView } from 'react-native-gesture-handler';
import CustomerInfo from './CustomerInfo';

const AddAddress = () => {
    const [step, setStep] = useState(1);
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
    )
    let currentComponent = null;
    if (step === 1) {
        currentComponent = <CustomerInfo setStep={setStep}/>
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {steps}
            {currentComponent}
        </ScrollView>
    )
}
export default AddAddress;