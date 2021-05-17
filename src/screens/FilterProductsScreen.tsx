import React from 'react';
import { ProductByCategories } from 'estore/containers/Products';
import { RouteProp } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatureHeader from 'estore/components/FeatureHeader';

type FilterProductsScreenProps = {
    route: RouteProp<HomeStackParamList, 'FilterProduct'>;
};

const FilterProductsScreen = ({ route }: FilterProductsScreenProps) => {
    const { name } = route.params;
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FeatureHeader name={name} />
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <ProductByCategories route={route} />
            </View>
        </View>
    );
};
export default FilterProductsScreen;
