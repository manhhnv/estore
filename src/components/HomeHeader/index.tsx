import React from 'react';
import { Dimensions, View } from 'react-native';
import { withBadge, Icon, Header, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen')

const HomeHeader = () => {
    const CartIcon = withBadge(2, { status: 'error', containerStyle: { marginRight: 25 } })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    const navigation = useNavigation();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={<Icon name="search" type="font-awesome" color="black" />}
                />
            }
            leftContainerStyle={{ marginLeft: 0.05*width }}
            rightComponent={
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        onPress={() => navigation.navigate("ViewCart")}
                        buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                        icon={<CartIcon
                            type="font-awesome"
                            name="shopping-cart"
                            color="black"
                        />}
                    />
                    <MessageIcon type="antdesign" name="wechat" color="black" />
                </View>
            }
            rightContainerStyle={{ marginHorizontal: 0.05 * width }}
            backgroundColor="white"
        />
    )
}
export default React.memo(HomeHeader)
