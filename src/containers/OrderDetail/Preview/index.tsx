import React, { useCallback, useEffect } from 'react';
import { Order, OrderLine, Order_State, useTransitionOrderToStateMutation } from 'estore/graphql/generated';
import { CartItem } from 'estore/containers/Checkout/CartPreview/CartItem';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import { FlatList, View, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';

type OrderPreviewProps = {
    order: Partial<Order>;
    executeGQLWrapper: () => void;
    executeCanceledGQLWrapper?: () => void;
}

const OrderPreview = ({ order, executeGQLWrapper, executeCanceledGQLWrapper }: OrderPreviewProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: { item: OrderLine }) => {
        return <CartItem item={item} navigation={navigation} />;
    };

    const [
        transitionOrderState,
        {
            data,
            loading,
            error,
        }
    ] = useTransitionOrderToStateMutation()

    const cancelOrder = useCallback(() => {
        if (order?.id) {
            transitionOrderState({ variables: { orderId: String(order.id), state: Order_State.Canceled } })
        }
    }, [order?.id]);

    const showErrorToast = () => {
        ToastAndroid.show("Có lỗi xảy ra, thử lại sau", ToastAndroid.LONG);
    }

    useEffect(() => {
        if (data?.transitionOrderToState) {
            executeGQLWrapper();
            executeCanceledGQLWrapper ? executeCanceledGQLWrapper() : null;
            navigation.goBack();
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showErrorToast();
        }
    }, [error])

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                data={order.lines}
                renderItem={renderItem}
                maxToRenderPerBatch={10}
                removeClippedSubviews={true}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
            <Button
                title={`Tổng thanh toán: ${(
                    Number(order?.totalPrice) +
                    Number(order?.shippingFee)
                )
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    .concat('đ')}`}
                    titleStyle={{ textTransform: "uppercase" }}
                buttonStyle={{
                    backgroundColor: order.state === Order_State.Waiting ? '#00bfa5' : "#ee4d2d",
                    borderRadius: 0
                }}
                containerStyle={{ borderRadius: 0 }}
                disabled={order.state !== Order_State.Waiting}
            />
            {
                order.state == Order_State.Waiting ? (
                    <Button
                        title="Hủy đơn hàng"
                        titleStyle={{ textTransform: "uppercase" }}
                        buttonStyle={{
                            backgroundColor: '#ee4d2d',
                            borderRadius: 0
                        }}
                        containerStyle={{ borderRadius: 0 }}
                        onPress={cancelOrder}
                        loading={loading}
                    />
                ) : null
            }
        </View>
    )
}

export default OrderPreview;
