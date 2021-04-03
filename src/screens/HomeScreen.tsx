import React, { useState, useCallback } from 'react';
import { Header, Icon, withBadge } from 'react-native-elements';
import { Dimensions, View, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Banners from 'estore/containers/Banner';
import { FeatureProducts } from 'estore/containers/Products';
import Categories from 'estore/containers/Categories';

const { width } = Dimensions.get("screen");
const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = () => {

    const CartIcon = withBadge(2, { status: "error" })(Icon);
    const MessageIcon = withBadge(4, { status: "error" })(Icon);

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <React.Fragment>
            <Header
                placement="right"
                leftComponent={<Icon name="search" type="font-awesome" color="black" />}
                leftContainerStyle={{ marginLeft: 0.05 * width }}
                centerComponent={
                    <CartIcon type="font-awesome" name="shopping-cart" color="black" />
                }
                rightComponent={
                    <MessageIcon type="antdesign" name="wechat" color="black" />
                }
                rightContainerStyle={{ marginHorizontal: 0.05 * width }}
                backgroundColor="white"
            />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ScrollView
                    // showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: "#fff" }}
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={refreshing}
                    //         onRefresh={onRefresh}
                    //     />
                    // }
                >
                    <Banners />
                    <Categories />
                    <FeatureProducts />
                </ScrollView>
            </View>
        </React.Fragment>
    )
}
export default HomeScreen;
