import React from 'react';
import { OrderLine, ProductOption } from 'estore/graphql/generated';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { CartItemAction } from './CartItemAction';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { cartItem } from './styles';
import { CartItemAdjust } from './CartItemAdjust';

type CartItemProps = {
    item: OrderLine;
    removeOrderLineHandle: (lineId: string) => void;
    navigation: NavigationProp<RootStackParamList>;
    addItemToCartHandle: (
        productId: string,
        quantity: number,
        config?: [ProductOption]
    ) => void;
};

const CartItem = ({
    item,
    removeOrderLineHandle,
    navigation,
    addItemToCartHandle
}: CartItemProps) => {
    const productDetailRedirect = () => {
        navigation.navigate('ProductDetail', { productId: item.productId });
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
        <Swipeable
            renderRightActions={() => (
                <CartItemAction
                    lineId={item.id}
                    removeOrderLineHandle={removeOrderLineHandle}
                />
            )}
        >
            <View style={cartItem.container}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={cartItem.cartItemThumbnail}
                    onPress={productDetailRedirect}
                />
                <View style={cartItem.wrapperContainer}>
                    <TouchableOpacity onPress={productDetailRedirect}>
                        <Text style={cartItem.cartItemName}>
                            {item.name.slice(0, 35).concat('...')}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={cartItem.cartItemPrice}>
                                đ{' '}
                                {item?.priceEach
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </Text>
                            <Text style={cartItem.cartItemPriceBeforeDiscount}>
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
                    </TouchableOpacity>
                    <CartItemAdjust
                        addItemToCartHandle={addItemToCartHandle}
                        item={item}
                    />
                </View>
            </View>
        </Swipeable>
    );
};

export { CartItem };
