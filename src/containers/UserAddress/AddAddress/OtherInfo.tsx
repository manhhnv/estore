import React, { useState, Dispatch, SetStateAction } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Input, Overlay, ListItem, Button, Icon } from 'react-native-elements';
import { otherInfoStyles, customerInfoStyles } from './styles';
import { OtherInfoType } from './index';
import { useCreateUserAddressMutation } from 'estore/graphql/generated';

type OtherInfoProp = {
    otherInfo: OtherInfoType;
    setOtherInfo: Dispatch<SetStateAction<OtherInfoType>>
}

const OtherInfo = ({ otherInfo, setOtherInfo }: OtherInfoProp) => {

    const [receivedTimeVisible, setReceivedTimeVisible] = useState(false);
    const toggleOverlay = () => {
        setReceivedTimeVisible(!receivedTimeVisible);
    }
    const [description, setDescription] = useState(otherInfo?.description);
    const [receiveTime, setReceiveTime] = useState({name: otherInfo?.receivedTime, id: -1});
    const [
        executeGQL,
        {
            called,
            loading,
            data,
            error
        }
    ] = useCreateUserAddressMutation();
    const showErrorToast = () => {
        ToastAndroid.show("Có lỗi xảy ra, hãy đảm bảo bạn nhập đủ thông tin", ToastAndroid.SHORT)
    }
    const descriptionOnchangeHandle = (text: string) => {
        setDescription(text)
    }
    const receivedTimeOnChangeHandle = (text: string, id: number) => {
        setReceiveTime({name: text, id: id})
        toggleOverlay()
    }
    const addNewUserAddress = () => {
        // executeGQL({ variables: {
        //     input: {

        //     }
        // } })
    }
    return (
        <View  style={customerInfoStyles.container}>
            <Input
                label="Ghi chú (không bắt buộc)"
                labelStyle={{ marginTop: 10 }}
                leftIcon={<Icon type="antdesign" name="bars" />}
                value={description}
            />
            <Input
                label="Giờ nhận hàng"
                labelStyle={{ marginTop: 10 }}
                showSoftInputOnFocus={false}
                focusable={false}
                onTouchStart={toggleOverlay}
                leftIcon={<Icon type="antdesign" name="clockcircleo" />}
                value={receiveTime?.name}
            />
            <Overlay onBackdropPress={toggleOverlay} overlayStyle={otherInfoStyles.overlayContainer} isVisible={receivedTimeVisible}>
                <ListItem key={1} onPress={() => receivedTimeOnChangeHandle("Các ngày trong tuần", 1)}>
                    <ListItem.Content>
                        <ListItem.Title>
                            Các ngày trong tuần
                        </ListItem.Title>
                    </ListItem.Content>
                    {receiveTime?.id === 1 ? <ListItem.Chevron type="antdesign" name="check" color="green" /> : null}
                </ListItem>
                <ListItem key={2} onPress={() => receivedTimeOnChangeHandle("Chỉ trong giờ hành chính", 2)}>
                    <ListItem.Content>
                        <ListItem.Title>
                            Chỉ trong giờ hành chính
                        </ListItem.Title>
                    </ListItem.Content>
                    {receiveTime?.id === 1 ? <ListItem.Chevron type="antdesign" name="check" color="green" /> : null}
                </ListItem>
            </Overlay>
            <Button
                title="LƯU ĐỊA CHỈ"
                containerStyle={customerInfoStyles.nextStepButton}
                buttonStyle={{ backgroundColor: '#ee4d2d' }}
                titleStyle={{ letterSpacing: 1 }}
            />
        </View>
    )
}

export default React.memo(OtherInfo);
