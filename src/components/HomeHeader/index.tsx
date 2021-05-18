import React from 'react';
import { Dimensions } from 'react-native';
import { Icon, Header, Button } from 'react-native-elements';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import { Order } from 'estore/graphql/generated';
import { RootStackParamList } from 'estore/types';
import Retail from 'estore/components/Retail';

const { width } = Dimensions.get('screen');

type HomeHeaderProps = {
    cart?: Partial<Order>;
};

const HomeHeader = ({ cart }: HomeHeaderProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={
                        <Icon name="search" type="font-awesome" color="black" />
                    }
                    onPress={() => {
                        navigation.navigate("searchProduct")
                    }}
                />
            }
            leftContainerStyle={{ marginLeft: 0.05 * width }}
            rightComponent={
                <Retail cart={cart} navigation={navigation} />
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
export default connect(mapStateToProps, null)(React.memo(HomeHeader));
