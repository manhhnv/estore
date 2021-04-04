import React from 'react';
import { ProductByCategories } from 'estore/containers/Products';
import { RouteProp, useNavigation } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import { View, Text } from 'react-native';
import { Header, Icon, Button, withBadge } from 'react-native-elements';
import { adjust } from 'estore/helpers/adjust';

type FilterProductsScreenProps = {
    route: RouteProp<HomeStackParamList, 'FilterProduct'>;
};

const FilterProductsScreen = ({ route }: FilterProductsScreenProps) => {
    const navigation = useNavigation();
    const { name } = route.params;
    const CartIcon = withBadge(2, { status: 'error' })(Icon);
    return (
        <React.Fragment>
            <Header
                centerComponent={
                    <Text
                        style={{
                            fontFamily: 'castoro',
                            fontSize: adjust(15),
                            letterSpacing: 1
                        }}
                    >
                        {name}
                    </Text>
                }
                backgroundColor="white"
                leftComponent={
                    <Button
                        onPress={() => navigation.goBack()}
                        buttonStyle={{ backgroundColor: 'white' }}
                        icon={<Icon type="font-awesome" name="angle-left" />}
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
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <ProductByCategories route={route} />
            </View>
        </React.Fragment>
    );
};
export default FilterProductsScreen;
