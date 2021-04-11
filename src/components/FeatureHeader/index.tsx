import React from 'react';
import { withBadge, Icon, Header, Button } from 'react-native-elements';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adjust } from 'estore/helpers/adjust';

type FeatureHeaderProps = {
    name?: string;
}
const { width } = Dimensions.get('screen');

const FeatureHeader = ({ name }: FeatureHeaderProps) => {
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
                    icon={<Icon name="back" type="antdesign" color="black" />}
                ></Button>
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
    )
}
export default React.memo(FeatureHeader);
