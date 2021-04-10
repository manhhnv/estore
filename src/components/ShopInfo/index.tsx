import { adjust } from 'estore/helpers/adjust';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Image, Icon, Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

const ShopInfo = () => {
    return (
        <View style={{ backgroundColor: "white", marginTop: 12, paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('estore/assets/images/logo.png')} style={{ width: 80, height: 80, borderRadius: 100 }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: "bold", marginTop: 5, letterSpacing: 1 }}>Ebuy Shop</Text>
                    <Text style={{ marginTop: 5 }}>Online 11 phút trước</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Icon type="ionicon" name="location-outline" color="red" size={20}/>
                        <Text> Hà Nội</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', right: 10, top: 22 }}>
                    <Button
                        title="Xem Shop"
                        titleStyle={{ color: '#ee5240' }}
                        type="outline"
                        containerStyle={{ width: 120 }}
                        buttonStyle={{ borderColor: '#ee5240' }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'center' }}>
                <View style={{ width: 0.3*(width-2), alignItems: 'center' }}>
                    <Text style={{ color: '#ee4d2d', fontSize: adjust(15), paddingBottom: 10 }}>659</Text>
                    <Text style={{fontSize: adjust(13)}}>Sản phẩm</Text>
                </View>
                <View style={{ width: 1, backgroundColor: '#e8e8e8', height: 55 }}></View>
                <View style={{ width: 0.3*(width-2), alignItems: 'center' }}>
                    <Text style={{ color: '#ee4d2d', fontSize: adjust(15), paddingBottom: 10 }}>4.9</Text>
                    <Text style={{fontSize: adjust(13)}}>Đánh giá</Text>
                </View>
                <View style={{ width: 1, backgroundColor: '#e8e8e8', height: 55 }}></View>
                <View style={{ width: 0.3*(width-2), alignItems: 'center' }}>
                    <Text style={{ color: '#ee4d2d', fontSize: adjust(15), paddingBottom: 10 }}>92%</Text>
                    <Text style={{fontSize: adjust(13)}}>Phản hồi Chat</Text>
                </View>
            </View>
        </View>
    )
}
export default React.memo(ShopInfo)