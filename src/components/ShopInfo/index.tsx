import React from 'react';
import { Text, View } from 'react-native';
import { Image, Icon, Button } from 'react-native-elements';
import styles from './styles';

const ShopInfo = () => {
    return (
        <View style={styles.shopInfoContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('estore/assets/images/logo.png')} style={styles.shopAvatar} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.shopName}>Ebuy Shop</Text>
                    <Text style={{ marginTop: 5 }}>Online 11 phút trước</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Icon type="ionicon" name="location-outline" color="red" size={20}/>
                        <Text> Hà Nội</Text>
                    </View>
                </View>
                <View style={styles.viewShopButtonContainer}>
                    <Button
                        title="Xem Shop"
                        titleStyle={{ color: '#ee5240' }}
                        type="outline"
                        containerStyle={{ width: 120 }}
                        buttonStyle={{ borderColor: '#ee5240' }}
                    />
                </View>
            </View>
            <View style={styles.shopOverview}>
                <View style={styles.overviewField}>
                    <Text style={styles.overviewValue}>659</Text>
                    <Text style={styles.overviewFieldName}>Sản phẩm</Text>
                </View>
                <View style={styles.driverVertically}></View>
                <View style={styles.overviewField}>
                    <Text style={styles.overviewValue}>4.9</Text>
                    <Text style={styles.overviewFieldName}>Đánh giá</Text>
                </View>
                <View style={styles.driverVertically}></View>
                <View style={styles.overviewField}>
                    <Text style={styles.overviewValue}>92%</Text>
                    <Text style={styles.overviewFieldName}>Phản hồi Chat</Text>
                </View>
            </View>
        </View>
    )
}
export default React.memo(ShopInfo)