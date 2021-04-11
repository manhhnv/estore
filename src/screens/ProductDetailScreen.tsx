import React from 'react';
import { Dimensions, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import ProductDetail from 'estore/containers/Products/Detail';
import { Header, Icon, withBadge, Button } from 'react-native-elements';

const { width } = Dimensions.get('screen');
type ProductDetailScreenProps = {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, "ProductDetail">
}

const ProductDetailScreen = ({ navigation, route }: ProductDetailScreenProps) => {

    const CartIcon = withBadge(2, { status: 'error', containerStyle: { marginRight: 25 } })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    if (route.params?.productId) {
        return (
            <React.Fragment>
                <Header
                    placement="center"
                    leftComponent={
                        <Button
                            onPress={() => navigation.goBack()}
                            buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                            icon={<Icon name="back" type="antdesign" color="black" />}
                        ></Button>
                    }
                    rightComponent={
                        <View style={{ flexDirection: 'row' }}>
                        <CartIcon
                            type="font-awesome"
                            name="shopping-cart"
                            color="black"
                        />
                        <MessageIcon type="antdesign" name="wechat" color="black" />
                    </View>
                    }
                    rightContainerStyle={{ marginHorizontal: 0.05 * width }}
                    backgroundColor="white"
                />
                <View style={{ flex: 1 }}>
                    <ProductDetail productId={route.params.productId} />
                </View>
            </React.Fragment>
        )
    }
    else return null;
}

export default ProductDetailScreen;
