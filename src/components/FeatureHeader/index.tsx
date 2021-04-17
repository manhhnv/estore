import React from 'react';
import { withBadge, Icon, Header, Button } from 'react-native-elements';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adjust } from 'estore/helpers/adjust';
import { Order } from 'estore/graphql/generated';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';

type FeatureHeaderProps = {
    name?: string;
    cart?: Partial<Order>
}
const { width } = Dimensions.get('screen');

const FeatureHeader = ({ name, cart }: FeatureHeaderProps) => {
    const CartIcon = withBadge(cart?.totalQuantity && cart.totalQuantity >= 10 ? '9+' : cart?.totalQuantity, { status: 'error', containerStyle: { marginRight: 30 } })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    const navigation = useNavigation();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={<Icon name="back" type="antdesign" color="black" />}
                />
            }
            centerComponent={
                name ? (
                    <Text
                        style={{
                            fontFamily: 'castoro',
                            fontSize: adjust(15),
                            letterSpacing: 1
                        }}
                    >
                        {name}
                    </Text>
                ) : undefined
            }
            rightComponent={
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        onPress={() => navigation.navigate("ViewCart")}
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
            }
            rightContainerStyle={{ marginHorizontal: 0.05 * width }}
            backgroundColor="white"
        />
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(React.memo(FeatureHeader));
