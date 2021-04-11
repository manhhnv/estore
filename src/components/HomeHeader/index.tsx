import React from 'react';
import { Dimensions } from 'react-native';
import { withBadge, Icon, Header } from 'react-native-elements';

const { width } = Dimensions.get('screen')

const HomeHeader = () => {
    const CartIcon = withBadge(2, { status: 'error' })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    return (
        <Header
            placement="right"
            leftComponent={
                <Icon name="search" type="font-awesome" color="black" />
            }
            leftContainerStyle={{ marginLeft: 0.05 * width }}
            centerComponent={
                <CartIcon
                    type="font-awesome"
                    name="shopping-cart"
                    color="black"
                />
            }
            rightComponent={
                <MessageIcon type="antdesign" name="wechat" color="black" />
            }
            rightContainerStyle={{ marginHorizontal: 0.05 * width }}
            backgroundColor="white"
        />
    )
}
export default React.memo(HomeHeader)
