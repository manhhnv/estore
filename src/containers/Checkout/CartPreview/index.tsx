import React from 'react';
import { View, FlatList } from 'react-native';
import { RootState } from 'estore/redux/slice';
import { useSelector } from 'react-redux';
import { OrderLine } from 'estore/graphql/generated';
import { CartItem } from './CartItem';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';

const CartPreview = () => {
    const order = useSelector((state: RootState) => state.cart);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: { item: OrderLine }) => {
        return <CartItem item={item} navigation={navigation} />;
    };
    return (
        <FlatList
            data={order.lines}
            renderItem={renderItem}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
        />
    );
};

export default React.memo(CartPreview);
