import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Overlay, ListItem, Button } from 'react-native-elements';
import { otherInfoStyles, customerInfoStyles } from './styles';

const OtherInfo = () => {

    const [receivedTimeVisible, setReceivedTimeVisible] = useState(false);
    const toggleOverlay = () => {
        setReceivedTimeVisible(!receivedTimeVisible);
    }
    const [description, setDescription] = useState('');
    const [receiveTime, setReceiveTime] = useState('');

    return (
        <View  style={customerInfoStyles.container}>
            <Input
                label="Ghi chú (không bắt buộc)"
                labelStyle={{ marginTop: 10 }}
            />
            <Input
                label="Giờ nhận hàng"
                labelStyle={{ marginTop: 10 }}
                showSoftInputOnFocus={false}
                focusable={false}
                onTouchStart={toggleOverlay}
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
