import React, { SetStateAction, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Button, Icon, BottomSheet, Image, Input } from 'react-native-elements';
import styles from './styles';
import {
    Configs,
    useAddToCartMutation,
    ProductOption,
    Order
} from 'estore/graphql/generated';
import { RootState } from 'estore/redux/slice';
import { addToCart } from 'estore/redux/slice/cartSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { adjust } from 'estore/helpers/adjust';

type ProductConfigProps = {
    configs: Array<Configs | null | undefined> | undefined | null;
    isVisible: boolean;
    setVisible: React.Dispatch<SetStateAction<boolean>>;
    thumbnail?: string;
    price?: number | null;
    inStock?: number;
    productId: string;
    cart?: Partial<Order>;
    addToCart?: ActionCreatorWithPayload<Partial<Order>, string>;
};

const ProductConfig = ({
    configs,
    isVisible,
    setVisible,
    thumbnail,
    price,
    inStock,
    productId,
    cart,
    addToCart
}: ProductConfigProps) => {
    const [
        executeAddToCart,
        { loading, data, error, called }
    ] = useAddToCartMutation();

    const [config, setConfig] = useState(undefined) as [
        Array<ProductOption> | undefined,
        React.Dispatch<SetStateAction<Array<ProductOption> | undefined>>
    ];
    const [quantity, setQuantity] = useState(1) as [
        number,
        React.Dispatch<SetStateAction<number>>
    ];

    const addToCartHandle = () => {
        if (config && config.length > 0) {
            executeAddToCart({
                variables: {
                    productId: productId,
                    quantity: quantity,
                    config: config
                }
            });
        } else {
            executeAddToCart({
                variables: { productId: productId, quantity: quantity }
            });
        }
    };

    const quantityIncrement = () => {
        setQuantity(quantity + 1);
    };
    const quantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const selectConfig = (name: string, value: string) => {
        if (config && config.length > 0) {
            const index = config.findIndex((item) => item.name === name);
            if (index === -1) {
                setConfig([...config, { name: name, value: value }]);
            } else {
                const updateConfigs = config.map((item) => {
                    if (item.name === name) {
                        return { ...item, value: value };
                    } else {
                        return item;
                    }
                });
                setConfig(updateConfigs);
            }
        } else {
            setConfig([{ name: name, value: value }]);
        }
    };
    const selectedOption = (name: string, value: string): boolean => {
        if (config && config.length > 0) {
            const index = config.findIndex((item) => item.name === name);
            if (index === -1) {
                return false;
            } else {
                for (let i = 0; i < config.length; i++) {
                    if (config[i].name == name && config[i].value == value) {
                        return true;
                    }
                }
                return false;
            }
        } else {
            return false;
        }
    };
    const addToCartSuccessToast = () => {
        ToastAndroid.show('Thêm vào giỏ hàng thành công', ToastAndroid.SHORT);
    };
    const addToCartFailedToast = () => {
        ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
    };
    const fetchConfigOptions = (config: Configs) => {
        if (config.name && config.values && config.values.length > 0) {
            return (
                <React.Fragment key={config.name}>
                    <View style={styles.configOptionContainer}>
                        <Text style={styles.configName}>{config.name}</Text>
                        <View style={styles.listConfigValuesContainer}>
                            {config.values.map((val, index) => {
                                if (val) {
                                    return (
                                        <TouchableOpacity
                                            style={[
                                                styles.configValueContainer,
                                                selectedOption(config.name, val)
                                                    ? {
                                                          borderColor:
                                                              '#ee4d2d',
                                                          borderWidth: 1
                                                      }
                                                    : null
                                            ]}
                                            key={index}
                                            onPress={() =>
                                                selectConfig(config.name, val)
                                            }
                                        >
                                            <Text style={styles.configValue}>
                                                {val}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                }
                                return null;
                            })}
                        </View>
                    </View>
                    <View style={styles.driver}></View>
                </React.Fragment>
            );
        }
        return null;
    };
    const fetchAllConfigs = (
        configs: Array<Configs | null | undefined> | undefined | null
    ) => {
        if (configs && configs.length > 0) {
            const configJSX = configs.map((config) => {
                if (config) {
                    return fetchConfigOptions(config);
                }
                return null;
            });
            return configJSX;
        } else {
            return null;
        }
    };
    const productConfigs = fetchAllConfigs(configs);
    useEffect(() => {
        if (called && error && error.message) {
            addToCartFailedToast();
        }
    }, [error]);
    useEffect(() => {
        if (data && data.addToCart) {
            if (addToCart) {
                const order = data.addToCart as Partial<Order>;
                addToCart(order);
                addToCartSuccessToast();
                setVisible(false);
            }
        }
    }, [data]);
    return (
        <BottomSheet
            modalProps={{
                animationType: 'slide',
                animated: true,
                statusBarTranslucent: true
            }}
            isVisible={isVisible}
            containerStyle={styles.configsBottomSheet}
        >
            <View style={styles.bottomSheetBody}>
                <View style={styles.productInfoInBottomSheet}>
                    <Image
                        source={{ uri: thumbnail, cache: 'force-cache' }}
                        style={styles.productThumbnail}
                    />
                    <Text style={styles.priceInBottomSheet}>
                        đ{' '}
                        {price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </Text>
                    <Text style={styles.inStock}>Kho: {inStock}</Text>
                    <Button
                        icon={
                            <Icon
                                type="antdesign"
                                name="close"
                                color="#ee4d2d"
                                size={25}
                            />
                        }
                        type="outline"
                        buttonStyle={{ borderColor: 'transparent' }}
                        containerStyle={{ position: 'absolute', right: 15 }}
                        onPress={() => setVisible(!isVisible)}
                    ></Button>
                </View>
                <View style={styles.driver}></View>
                {productConfigs}
                <View style={styles.orderQuantityContainer}>
                    <Text style={styles.quantityText}>Số lượng</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Button
                            icon={<Icon name="minus" type="antdesign" />}
                            type="outline"
                            buttonStyle={styles.adjustQuantityButton}
                            titleStyle={{ color: 'gray' }}
                            onPress={quantityDecrease}
                        />
                        <Input
                            value={`${quantity}`}
                            disabled
                            containerStyle={{ width: 50 }}
                            style={{ textAlign: 'center' }}
                        />
                        <Button
                            icon={<Icon name="plus" type="antdesign" />}
                            type="outline"
                            buttonStyle={styles.adjustQuantityButton}
                            titleStyle={{ color: 'gray' }}
                            onPress={quantityIncrement}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 30, flexDirection: 'row' }}>
                    <Button
                        title={`${'Thêm vào giỏ hàng'.toUpperCase()}`}
                        containerStyle={styles.buttonInBottomSheet}
                        buttonStyle={[
                            styles.addingButtonCommon,
                            { backgroundColor: '#00bfa5' }
                        ]}
                        onPress={() => {
                            addToCartHandle();
                        }}
                        loading={called && loading ? true : false}
                        loadingProps={{ size: 'large' }}
                        titleStyle={{ fontSize: adjust(13) }}
                    ></Button>
                    <Button
                        title={`${'Mua ngay'.toUpperCase()}`}
                        containerStyle={styles.buttonInBottomSheet}
                        buttonStyle={[
                            styles.addingButtonCommon,
                            { backgroundColor: '#ee4d2d' }
                        ]}
                        titleStyle={{ fontSize: adjust(13) }}
                    ></Button>
                </View>
            </View>
        </BottomSheet>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    };
};
const mapDispatchToProps = { addToCart };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(ProductConfig));
