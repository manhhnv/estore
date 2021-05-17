import React from 'react';
import { withBadge, Icon, Header, Button } from 'react-native-elements';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { adjust } from 'estore/helpers/adjust';
import { Order } from 'estore/graphql/generated';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import Retail from 'estore/components/Retail';
import { RootStackParamList } from 'estore/types';

type FeatureHeaderProps = {
    name?: string;
    cart?: Partial<Order>;
};
const { width } = Dimensions.get('screen');

const FeatureHeader = ({ name, cart }: FeatureHeaderProps) => {
    const CartIcon = withBadge(
        cart?.totalQuantity && cart.totalQuantity >= 10
            ? '9+'
            : cart?.totalQuantity,
        { status: 'error', containerStyle: { marginRight: 30 } }
    )(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
                <Retail cart={cart} navigation={navigation}/>
            }
            backgroundColor="white"
        />
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    };
};
export default connect(mapStateToProps, null)(React.memo(FeatureHeader));
