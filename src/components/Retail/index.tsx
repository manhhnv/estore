import React from 'react';
import { Order } from 'estore/graphql/generated';
import { View } from 'react-native';
import { withBadge, Icon, Button } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';

type RetailProps = {
    cart?: Partial<Order>;
    navigation: NavigationProp<RootStackParamList>
};

const Retail = ({ cart, navigation }: RetailProps) => {
    const CartIcon = withBadge(
        cart?.totalQuantity && cart.totalQuantity >= 10
            ? '9+'
            : cart?.totalQuantity,
        { status: 'error', containerStyle: { marginRight: 25 } }
    )(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    return (
        <View style={{ flexDirection: 'row' }}>
            <Button
                onPress={() => navigation.navigate('ViewCart')}
                buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                icon={
                    cart && cart.totalQuantity ? (
                        <CartIcon
                            type="font-awesome"
                            name="shopping-cart"
                            color="black"
                        />
                    ) : (
                        <Icon
                            type="font-awesome"
                            name="shopping-cart"
                            color="black"
                            containerStyle={{ marginRight: 30 }}
                        />
                    )
                }
            />
            <MessageIcon type="antdesign" name="wechat" color="black" />
        </View>
    );
};

export default React.memo(Retail);
