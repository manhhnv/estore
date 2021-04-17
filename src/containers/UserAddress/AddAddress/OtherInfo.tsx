import React, { useState, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Input, Overlay, ListItem, Button, Icon } from 'react-native-elements';
import { otherInfoStyles, customerInfoStyles } from './styles';
import { OtherInfoType } from './index';

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
    const [receiveTime, setReceiveTime] = useState(otherInfo?.receivedTime);

    const descriptionOnchangeHandle = (text: string) => {
        setDescription(text)
    }
    const receivedTimeOnChangeHandle = (text: string) => {
        setReceiveTime(text)
    }

    return (
        <View  style={customerInfoStyles.container}>
            <Input
                label="Ghi chú (không bắt buộc)"
                labelStyle={{ marginTop: 10 }}
                leftIcon={<Icon type="antdesign" name="bars" />}
            />
            <Input
                label="Giờ nhận hàng"
                labelStyle={{ marginTop: 10 }}
                showSoftInputOnFocus={false}
                focusable={false}
                onTouchStart={toggleOverlay}
                leftIcon={<Icon type="antdesign" name="clockcircleo" />}
            />
            <Overlay onBackdropPress={toggleOverlay} overlayStyle={otherInfoStyles.overlayContainer} isVisible={receivedTimeVisible}>
                <ListItem key={1} onPress={toggleOverlay}>
                    <ListItem.Content>
                        <ListItem.Title>
                            Các ngày trong tuần
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron type="antdesign" name="check" color="green" />
                </ListItem>
                <ListItem key={2} onPress={toggleOverlay}>
                    <ListItem.Content>
                        <ListItem.Title>
                            Chỉ trong giờ hành chính
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron type="antdesign" name="check" color="green" />
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
