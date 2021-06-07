import React from 'react';
import FeatureHeader from 'estore/components/FeatureHeader';
import {
    NavigationProp,
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import OrderPreview from 'estore/containers/OrderDetail/Preview';

const OrderDetailScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'orderDetail'>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <React.Fragment>
            <FeatureHeader name="Chi tiết" />
            {route.params?.order ? (
                <OrderPreview
                    order={route.params.order}
                    executeGQLWrapper={route.params.executeGQLWrapper}
                    executeCanceledGQLWrapper={route.params?.executeCanceledGQLWrapper}
                />
            ) : null}
        </React.Fragment>
    );
};

export default OrderDetailScreen;
