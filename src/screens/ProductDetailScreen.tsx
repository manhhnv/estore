import React from 'react';
import { Dimensions, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from 'estore/types';
import ProductDetail from 'estore/containers/Products/Detail';
import { Header, Icon, withBadge, Button } from 'react-native-elements';

const { width } = Dimensions.get('screen');
type ProductDetailScreenProps = {
    navigation: NavigationProp<HomeStackParamList>;
    route: RouteProp<HomeStackParamList, "ProductDetail">
}

const ProductDetailScreen = ({ navigation, route }: ProductDetailScreenProps) => {
    const CartIcon = withBadge(2, { status: 'error' })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    if (route.params?.productId) {
        return (
            <React.Fragment>
                <Header
                backgroundColor="white"
                leftComponent={
                    <Button
                        onPress={() => navigation.goBack()}
                        buttonStyle={{ backgroundColor: 'white' }}
                        icon={<Icon name="back" type="antdesign" color="black" />}
                    ></Button>
                }
                rightComponent={
                    <CartIcon
                        type="font-awesome"
                        name="shopping-cart"
                        color="black"
                    />
                }
                rightContainerStyle={{ paddingRight: 20 }}
            />
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white", alignItems: 'center' }}>
                    <ProductDetail productId={route.params.productId} />
                </View>
            </React.Fragment>
        )
    }
    else return null;
}

export default ProductDetailScreen;
