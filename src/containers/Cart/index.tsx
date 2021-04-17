import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Order, OrderLine, useRemoveFromCartMutation } from 'estore/graphql/generated';
import { adjust } from 'estore/helpers/adjust';
import { RootState } from 'estore/redux/slice';
import React, { useEffect } from 'react';
import { Text, View, FlatList, ToastAndroid, ActivityIndicator, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { Icon, Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { connect } from 'react-redux';
import { addToCart } from 'estore/redux/slice/cartSlice';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';

const { height } = Dimensions.get('window');

type CartProps = {
    cart?: Partial<Order>;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
}

const Cart = ({ cart, addToCart }: CartProps) => {
    const [removeOrderLine, { called, loading, data, error }] = useRemoveFromCartMutation();
    const removeOrderLineHandle = (lineId: string) => {
        removeOrderLine({ variables: { lineId: lineId } });
    }
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const removeOrderLineSuccess = () => {
        ToastAndroid.show("Đã xóa mục này khỏi giỏ hàng", ToastAndroid.SHORT)
    }
    const removeOrderLineFailed = () => {
        ToastAndroid.show("Có lỗi xảy ra", ToastAndroid.SHORT)
    }
    const renderItem = ({ item }: { item: OrderLine }) => {
        return (
            <OrderItem item={item} removeOrderLineHandle={removeOrderLineHandle} navigation={navigation} />
        )
    }
    useEffect(() => {
        if (error && error.message) {
            removeOrderLineFailed()
        }
    }, [error])
    useEffect(() => {
        if (data && data.removeFromCart) {
            const order = data.removeFromCart as Partial<Order>;
            addToCart(order);
            removeOrderLineSuccess()
        }
    }, [data])
    if (cart && cart.lines && cart.lines.length > 0) {
        return (
            <>
                <FlatList
                    data={cart.lines}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews={true}
                />
                {loading ? (
                    <React.Fragment>
                        <View style={styles.overlayLoadingContainer}>
                        </View>
                        <ActivityIndicator color="#ee4d2d" size="large" style={{ flex: 1, position: 'absolute', bottom: 0.5 * height, alignSelf: 'center' }} />
                    </React.Fragment>
                ) : null}
            </>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center' }}>
            <Text style={{
                textAlign: 'center',
                fontSize: adjust(15),
                fontFamily: "serif",
                letterSpacing: 1,
                opacity: 0.5,
            }}>Giỏ hàng trống</Text>
        </View>
    )
}

type OrderItemProps = {
    item: OrderLine;
    removeOrderLineHandle: (lineId: string) => void;
    navigation: NavigationProp<RootStackParamList>;
}

const OrderItem = ({ item, removeOrderLineHandle, navigation }: OrderItemProps) => {
    if (item) {
        const productDetailRedirect = () => {
            navigation.navigate("ProductDetail", { productId: item.productId })
        }
        let variant = '';
        if (item.configProduct && item.configProduct.length > 0) {
            const length = item.configProduct.length;
            for (let i = 0; i < length; i++) {
                const value = item.configProduct[i]?.value;
                if (value) {
                    i < length - 1 ? variant = variant.concat(value, ', ') : variant = variant.concat(value);
                }
            }
        }
        return (
            <React.Fragment>
                <Swipeable renderRightActions={() => <LeftComponent lineId={item.id} removeOrderLineHandle={removeOrderLineHandle} />}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10 }}>
                        <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 115 }} onPress={productDetailRedirect} />
                        <View style={{ flexDirection: 'column', marginLeft: 10, flexWrap: 'wrap', width: "90%" }}>
                            <TouchableOpacity onPress={productDetailRedirect}>
                                <Text style={{ fontSize: adjust(11) }}>
                                    {item.name.slice(0, 35).concat("...")}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#ee4d2d',
                                        fontSize: adjust(12),
                                        marginTop: 10
                                    }}>đ {item?.priceEach.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                                    <Text style={{
                                        fontSize: adjust(10),
                                        color: 'grey',
                                        fontWeight: 'bold',
                                        textDecorationLine: 'line-through',
                                        marginTop: 12, marginLeft: 10
                                    }}>đ {item?.priceEachBeforeDiscount?.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                                </View>
                                <View>
                                    {variant ? <Text style={{ marginTop: 5 }}>Phân loại: {variant}</Text> : null}
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Button icon={<Icon name="minus" type="antdesign" />} type="outline" buttonStyle={{ borderColor: 'gray', borderRadius: 0 }} titleStyle={{ color: "gray" }} />
                                <Input value={`${item?.subQuantity}`} disabled containerStyle={{ width: 50 }} style={{ textAlign: 'center' }} />
                                <Button icon={<Icon name="plus" type="antdesign" />} type="outline" buttonStyle={{ borderColor: 'gray', borderRadius: 0 }} titleStyle={{ color: "gray" }} />
                            </View>
                        </View>
                    </View>
                </Swipeable>
            </React.Fragment>
        )
    }
    else {
        return <Text></Text>
    }
}

type LeftComponentProps = {
    lineId: string;
    removeOrderLineHandle: (lineId: string) => void
}

const LeftComponent = ({ lineId, removeOrderLineHandle }: LeftComponentProps) => {
    return (
        <TouchableOpacity
            style={{ width: 80, backgroundColor: "#ee4d2d", height: 182, justifyContent: 'center' }}
            onPress={() => removeOrderLineHandle(lineId)}
        >
            <Text style={{ textAlign: 'center', color: 'white', fontSize: adjust(13), paddingBottom: 5 }}>Xóa</Text>
            <Icon name="delete" type="antdesign" color="white" />
        </TouchableOpacity>
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = { addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cart))