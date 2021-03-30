import React, { useState, useCallback } from 'react';
import { Header, Icon, Badge, withBadge } from 'react-native-elements';
import { Dimensions, Text, View, RefreshControl } from 'react-native';
import Collections from 'estore/containers/Collection';
import { ScrollView } from 'react-native-gesture-handler';
import Extension from 'estore/containers/Extension';
import ProductRecommendation from 'estore/containers/ProductRecommendation';
import FlashSale from 'estore/containers/FlashSale';
import Banners from 'estore/containers/Banner';

const { width, height } = Dimensions.get("screen");

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
                leftComponent={<Icon name="search" type="font-awesome" color="#fff" />}
                leftContainerStyle={{ marginLeft: 0.05 * width }}
                centerComponent={
                    <CartIcon type="font-awesome" name="shopping-cart" color="#fff" />
                }
                rightComponent={
                    <MessageIcon type="antdesign" name="wechat" color="#fff"/>
                }
                rightContainerStyle={{ marginHorizontal: 0.05*width }}
                backgroundColor="#07ac4f"
            />
           <View style={{ flex: 1, alignItems: "center",justifyContent: "center" }}>
            <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: "#fff" }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <Collections />
                    <Extension />
                    <Banners />
                    <ProductRecommendation />
                    <FlashSale />
                </ScrollView>
           </View>
        </React.Fragment>
    )
}
export default HomeScreen;