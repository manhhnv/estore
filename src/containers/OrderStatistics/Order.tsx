import { NavigationProp } from '@react-navigation/core';
import { Order } from 'estore/graphql/generated';
import { RootStackParamList } from 'estore/types';
import React from 'react';
import { ListItem } from 'react-native-elements';

type OrderProps = {
    order: Partial<Order>;
    navigation: NavigationProp<RootStackParamList>;
    executeGQLWrapper: () => void;
    executeCanceledGQLWrapper?: () => void;
};

const OrderComponent = ({
    order,
    navigation,
    executeGQLWrapper,
    executeCanceledGQLWrapper
}: OrderProps) => {
    const { id, updatedAt } = order;
    let time = '';
    let date = '';
    const [dateRaw, timeRaw] = String(updatedAt).split('T');
    date = dateRaw;
    time = timeRaw.split('.')[0];
    const viewOrderDetail = () => {
        navigation.navigate('orderDetail', {
            order: order,
            executeGQLWrapper: executeGQLWrapper,
            executeCanceledGQLWrapper: executeCanceledGQLWrapper
        });
    };
    return (
        <ListItem
            bottomDivider
            containerStyle={{ paddingVertical: 15 }}
            onPress={viewOrderDetail}
        >
            <ListItem.Content>
                <ListItem.Title style={{ paddingVertical: 10 }}>
                    Mã đơn hàng {id}
                </ListItem.Title>
                <ListItem.Subtitle>
                    Ngày tạo: {date} - {time}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default OrderComponent;
