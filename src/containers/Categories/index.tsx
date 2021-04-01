import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useCategoriesQuery } from 'estore/graphql/generated';
import Grid from 'estore/components/ProductsList/Grid';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles'

const { width } = Dimensions.get('window');

const Categories = () => {
    const { data, loading, error } = useCategoriesQuery();
    if (loading) {
        return (
            <GridPlaceholder />
        )
    }
    if (data) {
        return (
            <React.Fragment>
                <View style={{ flexDirection: "column", flex: 1 }}>
                    <Text>categories loaded</Text>
                </View>
            </React.Fragment>
        )
    }
    return (
        <View></View>
    )
}
export default Categories;