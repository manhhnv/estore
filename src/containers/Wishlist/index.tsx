import React, { useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    ToastAndroid,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';
import {
    Product,
    useActiveWishlistQuery,
    useMeQuery
} from 'estore/graphql/generated';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import List from 'estore/components/ProductsList/List';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { WishlistSliceType } from 'estore/redux/slice/wishlistSlice';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { logout } from 'estore/redux/slice/userSlice';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { adjust } from 'estore/helpers/adjust';
type WishlistProps = {
    user: UserSliceType;
    logout: ActionCreatorWithPayload<any, string>;
};
const { width, height } = Dimensions.get('window');

const Wishlist = ({ user, logout }: WishlistProps) => {
    const { called, data, loading, error } = useActiveWishlistQuery();

    useEffect(() => {
        if (data?.activeWishlist) {
            const wishlist = data.activeWishlist;
        }
    }, [data]);

    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    // const renderItem = ({ item }: { item: any }) => {
    //     console.log(item.product)
    //     return <ProductItem item={item.product} navigation={navigation} />;
    // };
    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return <ProductItem item={item} navigation={navigation} />;
        }
        return <Text></Text>;
    };
    if (loading) {
        return (
            <React.Fragment>
                <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator color="coral" size="large" />
                </View>
            </React.Fragment>
        );
    }
    if (data && data?.activeWishlist) {
        return (
            <SafeAreaView>
                <FlatList
                    data={data.activeWishlist}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
            // <List products={data.activeWishlist} />
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center'
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    // fontSize: adjust(15),
                    fontFamily: 'serif',
                    letterSpacing: 1,
                    opacity: 0.5
                }}
            >
                Wishlist trống
            </Text>
        </View>
    );
};

type ProductItemProps = {
    item: Partial<Product>;
    navigation: NavigationProp<HomeStackParamList>;
};

const ProductItem = React.memo(({ item, navigation }: ProductItemProps) => {
    const productDetail = (productId: string) => {
        navigation.navigate('ProductDetail', { productId: productId });
    };
    return (
        <Swipeable renderRightActions={() => <LeftComponent />}>
            <TouchableOpacity
                key={item.product.id}
                onPress={() =>
                    productDetail(item.product.id ? item.product.id : '')
                }
            >
                <View style={styles.productItem}>
                    {/* {item.product.rawDiscount ? (
                    <View style={styles.productSale}>
                        <FontAwesome5 name="tags" size={40} color="coral" />
                        <Text style={styles.saleText}>
                            {'-' + item.product.rawDiscount + '%'}
                        </Text>
                    </View>
                ) : null} */}

                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode="cover"
                            style={styles.productImage}
                            source={{
                                uri: item.product.thumbnail,
                                cache: 'force-cache'
                            }}
                        />
                    </View>

                    <View style={styles.priceContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.productName}>
                                {item.product.name?.slice(0, 40) + '...'}
                            </Text>
                            <Text style={styles.productDescription}>
                                {item.product.description?.slice(0, 60) + '...'}
                            </Text>
                        </View>

                        <View style={styles.priceBottomContainer}>
                            <Text style={styles.productPrice}>
                                {item.product.price
                                    ? item.product.price
                                          .toString()
                                          .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ','
                                          ) + ' VND'
                                    : null}
                            </Text>
                            <Text style={styles.productPriceBeforeDiscount}>
                                {item.product.priceBeforeDiscount
                                    ? item.product.priceBeforeDiscount
                                          .toString()
                                          .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ','
                                          ) + ' ₫'
                                    : null}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
});

const LeftComponent = () => {
    return (
        <TouchableOpacity
            style={{
                width: "15%",
                backgroundColor: 'coral',
                height: "100%",
                justifyContent: 'center',
                alignItems: "center"
            }}
        >
            <FontAwesome5 name="heart-broken" size={25} color="white" />
        </TouchableOpacity>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};

const mapDispatchToProps = { logout };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Wishlist));
