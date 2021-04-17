import React, { SetStateAction, useCallback, useEffect, useState, Dispatch } from 'react';
import { View } from 'react-native';
import {
    useAvailableProvincesQuery,
    useGetStatesByProvinceIdLazyQuery,
    Province, State
} from 'estore/graphql/generated';
import { Overlay, Input, ListItem, CheckBox, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { addressInfoStyles, customerInfoStyles } from './styles';
import { AddressInfoType } from './index';

type AddressInfo = {
    setStep: Dispatch<SetStateAction<number>>;
    addressInfo: AddressInfoType,
    setAddressInfo: Dispatch<SetStateAction<AddressInfoType>>
}

const AddressInfo = ({ setStep, addressInfo, setAddressInfo }: AddressInfo) => {
    const {
        called: provincesCalled,
        loading: provincesLoading,
        data: provincesData,
        error: provincesError
    } = useAvailableProvincesQuery();
    const [
        getStates,
        {
            called,
            loading,
            data,
            error
        }
    ] = useGetStatesByProvinceIdLazyQuery();
    const [visible, setVisible] = useState(false);
    const [stateOverlay, setStateOverlay] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleStateOverlay = () => {
        setStateOverlay(!stateOverlay)
    }
    const [selectedProvince, setSelectedProvince] = useState({ name: addressInfo.city.name, id: addressInfo.city.id });
    const [selectedState, setSelectedState] = useState({ name: addressInfo.state.name, id: addressInfo.state.id });
    const [ward, setWard] = useState(addressInfo.ward);
    const [streetLine1, setStreetLine1] = useState(addressInfo.streetLine1);
    const [isDefault, setIsDefault] = useState(addressInfo.isDefault);
    const getStatesByProvinceId = useCallback((provinceId: number) => {
        getStates({ variables: { provinceId: provinceId } })
    }, [selectedProvince])
    const selectProvinceHandle = (province: Province) => {
        if (province.id !== selectedProvince.id) {
            setSelectedProvince({ name: province.name, id: province.id })
        }
        toggleOverlay()
    }
    const selectStateHandle = (state: State) => {
        if (state.id !== selectedState.id) {
            setSelectedState({ name: state.name, id: state.id })
        }
        toggleStateOverlay()
    }
    const setWardHandle = (name: string) => {
        setWard(name);
    }
    const setStreetLineHandle = (name: string) => {
        setStreetLine1(name);
    }
    const toggleChecked = () => {
        setIsDefault(!isDefault);
    }
    const dispatchAddressStateToParentComponent = () => {
        setAddressInfo({
            city: selectedProvince,
            state: selectedState,
            ward: ward,
            streetLine1: streetLine1,
            isDefault: isDefault
        })
        setStep(3)
    }
    useEffect(() => {
        if (selectedProvince.id !== -1) {
            getStatesByProvinceId(selectedProvince.id)
        }
    }, [selectedProvince])
    return (
        <View style={customerInfoStyles.container}>
            <Input
                label="Tỉnh / Thành phố"
                labelStyle={{ marginTop: 10 }}
                showSoftInputOnFocus={false}
                focusable={false}
                onTouchStart={toggleOverlay}
                value={selectedProvince.name}
                errorMessage={selectedProvince.id == -1 ? "Không được để trống" : undefined}
                leftIcon={<Icon type="font-awesome" name="wpforms"/>}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={addressInfoStyles.overlayContainer}>
                <ScrollView>
                    {provincesData && provincesData.availableProvinces && provincesData.availableProvinces.length > 0 ?
                        provincesData.availableProvinces.map(province => {
                            if (province) {
                                return (
                                    <ListItem key={province.id} bottomDivider onPress={() => selectProvinceHandle(province)}>
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {province.name}
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        {province.id === selectedProvince.id ? (
                                            <ListItem.Chevron type="antdesign" name="check" color="green" />
                                        ) : null}
                                    </ListItem>
                                )
                            }
                        }) : null
                    }
                </ScrollView>
            </Overlay>
            <Input
                label="Quận / Huyện"
                labelStyle={{ marginTop: 10 }}
                showSoftInputOnFocus={false}
                focusable={false}
                onTouchStart={toggleStateOverlay}
                value={selectedState.name}
                errorMessage={selectedState.id == -1 ? "Không được để trống" : undefined}
                leftIcon={<Icon type="font-awesome" name="wpforms"/>}
            />
            <Overlay isVisible={stateOverlay} onBackdropPress={toggleStateOverlay} overlayStyle={addressInfoStyles.overlayContainer}>
                <ScrollView>
                    {data && data.getStatesByProvinceId?.items && data.getStatesByProvinceId.items?.length > 0 ?
                        data.getStatesByProvinceId.items.map(state => {
                            if (state) {
                                return (
                                    <ListItem key={state.id} bottomDivider onPress={() => selectStateHandle(state)}>
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {state.name}
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        {state.id === selectedState.id ? (
                                            <ListItem.Chevron type="antdesign" name="check" color="green" />
                                        ) : null}
                                    </ListItem>
                                )
                            }
                        }) : null
                    }
                </ScrollView>
            </Overlay>
            <Input
                label="Xã / Phường"
                labelStyle={{ marginTop: 10 }}
                errorMessage={(!ward || ward == "") ? "Không được để trống" : undefined}
                leftIcon={<Icon type="font-awesome" name="wpforms"/>}
                value={ward}
                onChangeText={(text: string) => setWardHandle(text)}
            />
            <Input
                label="Số nhà / Tên đường"
                labelStyle={{ marginTop: 10 }}
                errorMessage={(!streetLine1 || streetLine1 == "") ? "Không được để trống" : undefined}
                leftIcon={<Icon type="font-awesome" name="wpforms"/>}
                value={streetLine1}
                onChangeText={(text: string) => setStreetLineHandle(text)}
            />
            <CheckBox
                title="Đặt làm địa chỉ mặc định"
                containerStyle={{ borderColor: 'white', backgroundColor: "white" }}
                checked={isDefault}
                checkedColor="green"
                onPress={toggleChecked}
            />
            <Button
                title="TIẾP THEO"
                containerStyle={customerInfoStyles.nextStepButton}
                buttonStyle={{ backgroundColor: '#ee4d2d' }}
                titleStyle={{ letterSpacing: 1 }}
                onPress={dispatchAddressStateToParentComponent}
            />
        </View>
    )
}

export default React.memo(AddressInfo);
