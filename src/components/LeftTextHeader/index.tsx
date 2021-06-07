import React from 'react';
import { Header } from 'react-native-elements';
import Retail from 'estore/components/Retail';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import { Dimensions, Text } from 'react-native';
import { Order } from 'estore/graphql/generated';
import { adjust } from 'estore/helpers/adjust';
import { RootState } from 'estore/redux/slice';
import { connect } from 'react-redux';

const { width } = Dimensions.get('screen');

type LeftTextHeaderProps = {
    leftText: string;
    cart?: Partial<Order>;
};

const LeftTextHeader = ({ leftText, cart }: LeftTextHeaderProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Header
            placement="left"
            leftComponent={
                <Text
                    style={{
                        fontFamily: 'castoro',
                        fontSize: adjust(15),
                        letterSpacing: 1
                    }}
                >
                    {leftText}
                </Text>
            }
            leftContainerStyle={{ marginLeft: 0.05 * width }}
            rightComponent={<Retail cart={cart} navigation={navigation} />}
            backgroundColor="white"
        />
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    };
};
export default connect(mapStateToProps, null)(React.memo(LeftTextHeader));
