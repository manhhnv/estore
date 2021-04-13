import { adjust } from 'estore/helpers/adjust';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Icon, Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Cart = () => {
    return (
        <React.Fragment>
            <Swipeable renderRightActions={() => <LeftComponent />}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10 }}>
                <Image source={{ uri: 'https://cf.shopee.vn/file/0320abe29b6e08b708a278096eb4c3a4' }} style={{ width: 100, height: 115 }} />
                <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                    <Text style={{ fontSize: adjust(13) }}>
                        {"Áo thun tay lỡ WEARIT chất liệu cotton 100% form rộng unisex - northside boy".slice(0, 40).concat("...")}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            color: '#ee4d2d',
                            fontSize: adjust(12),
                            marginTop: 10
                        }}>đ 105,000</Text>
                        <Text style={{
                            fontSize: adjust(10),
                            color: 'grey',
                            fontWeight: 'bold',
                            textDecorationLine: 'line-through',
                            marginTop: 12, marginLeft: 10
                        }}>đ 135,000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Button icon={<Icon name="minus" type="antdesign"/>} type="outline" buttonStyle={{ borderColor: 'gray', borderRadius: 0}} titleStyle={{ color: "gray" }} />
                        <Input value={"2"} disabled containerStyle={{ width: 50 }} style={{ textAlign: 'center' }} />
                        <Button icon={<Icon name="plus" type="antdesign"/>} type="outline" buttonStyle={{ borderColor: 'gray', borderRadius: 0}} titleStyle={{ color: "gray" }}/>
                    </View>
                </View>
            </View>
        </Swipeable>
        </React.Fragment>
    )
}

const LeftComponent = () => {
    return (
        <TouchableOpacity style={{ width: 80, backgroundColor: "#ee4d2d", height: 162, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: adjust(13), paddingBottom: 5 }}>Xóa</Text>
            <Icon name="delete" type="antdesign" color="white"/>
        </TouchableOpacity>
    )
}
export default Cart;