import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Order } from 'estore/graphql/generated';
import { RootStackParamList } from 'estore/types';
import React from 'react';
import { FlatList } from 'react-native';
import OrderComponent from './Order';

type ListOrderProps = {
    listOrders: Array<Partial<Order> | null>;
    executeGQLWrapper: () => void;
    executeCanceledGQLWrapper?: () => void;
};

const ListOrder = ({
    listOrders,
    executeGQLWrapper,
    executeCanceledGQLWrapper
}: ListOrderProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: { item: Partial<Order> | null }) => {
        if (item) {
            return (
                <OrderComponent
                    order={item}
                    navigation={navigation}
                    executeGQLWrapper={executeGQLWrapper}
                    executeCanceledGQLWrapper={executeCanceledGQLWrapper}
                />
            );
        }
        return null;
    };
    return (
        <FlatList
            data={listOrders}
            maxToRenderPerBatch={8}
            renderItem={renderItem}
            removeClippedSubviews={true}
            keyExtractor={(item) => String(item?.id)}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ListOrder;
