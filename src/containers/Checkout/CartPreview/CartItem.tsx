import React from 'react';
import { View, Text } from 'react-native';
import { cartItemStyles } from './styles';
import { OrderLine } from 'estore/graphql/generated';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

type CartItemProps = {
    item: OrderLine;
    navigation: NavigationProp<RootStackParamList>;
};

const CartItem = React.memo(({ item, navigation }: CartItemProps) => {
    const productDetailRedirect = () => {
        navigation.navigate('ProductDetail', { productId: item.id });
    };
    let variant = '';
    if (item.configProduct && item.configProduct.length > 0) {
        const length = item.configProduct.length;
        for (let i = 0; i < length; i++) {
            const value = item.configProduct[i]?.value;
            if (value) {
                i < length - 1
                    ? (variant = variant.concat(value, ', '))
                    : (variant = variant.concat(value));
            }
        }
    }
    return (
        <View style={cartItemStyles.container}>
            <Image
                source={{ uri: item.thumbnail }}
                style={cartItemStyles.cartItemThumbnail}
                onPress={productDetailRedirect}
            />
            <View style={cartItemStyles.wrapperContainer}>
                <TouchableOpacity onPress={productDetailRedirect}>
                    <Text style={cartItemStyles.cartItemName}>
                        {item.name.slice(0, 35).concat('...')}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={cartItemStyles.cartItemPrice}>
                            đ{' '}
                            {item?.priceEach
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Text>
                        <Text
                            style={cartItemStyles.cartItemPriceBeforeDiscount}
                        >
                            đ{' '}
                            {item?.priceEachBeforeDiscount
                                ?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Text>
                    </View>
                    <View>
                        {variant ? (
                            <Text style={{ marginTop: 5 }}>
                                Phân loại: {variant}
                            </Text>
                        ) : null}
                    </View>
                    <View>
                        <Text style={{ marginTop: 5 }}>
                            Số lượng: {item.subQuantity}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export { CartItem };
