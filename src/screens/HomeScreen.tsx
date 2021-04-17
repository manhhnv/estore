import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeBanner from 'estore/containers/HomeBanner';
import { FeatureProducts } from 'estore/containers/Products';
import Categories from 'estore/containers/Categories';
import BestSellingProducts from 'estore/containers/Products/BestSellingProducts';
import HomeHeader from 'estore/components/HomeHeader';

const HomeScreen = () => {
    return (
        <React.Fragment>
            <HomeHeader />
            <View style={styles.bodyContainer}>
                <ScrollView
                    style={{ backgroundColor: '#fff' }}
                >
                    <HomeBanner />
                    <Categories />
                    <FeatureProducts />
                    <BestSellingProducts />
                </ScrollView>
            </View>
        </React.Fragment>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
