import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { OrderLine, ProductOption } from 'estore/graphql/generated';
import { cartItemAdjust } from './styles';

type CartItemAdjustProps = {
    addItemToCartHandle: (
        productId: string,
        quantity: number,
        config?: [ProductOption]
    ) => void;
    item: OrderLine;
};

const CartItemAdjust = ({ addItemToCartHandle, item }: CartItemAdjustProps) => {
    const increaseQuantity = () => {
        if (item && item.configProduct && item.configProduct.length > 0) {
            const configs = [] as Array<ProductOption>;
            item.configProduct.map((config) => {
                if (config) {
                    configs.push({
                        name: config.name,
                        value: config.value
                    });
                }
            });
            configs.length > 0
                ? addItemToCartHandle(
                      item.productId,
                      -1,
                      configs as [ProductOption]
                  )
                : addItemToCartHandle(item.productId, 1, undefined);
        }
    };
    const reduceQuantity = () => {
        if (item && item.configProduct && item.configProduct.length > 0) {
            const configs = [] as Array<ProductOption>;
            item.configProduct.map((config) => {
                if (config) {
                    configs.push({
                        name: config.name,
                        value: config.value
                    });
                }
            });
            configs.length > 0
                ? addItemToCartHandle(
                      item.productId,
                      -1,
                      configs as [ProductOption]
                  )
                : addItemToCartHandle(item.productId, 1, undefined);
        }
    };
    return (
        <View style={cartItemAdjust.container}>
            <Button
                icon={<Icon name="minus" type="antdesign" />}
                type="outline"
                buttonStyle={cartItemAdjust.adjustButton}
                titleStyle={{ color: 'gray' }}
                onPress={reduceQuantity}
            />
            <Input
                value={`${item?.subQuantity}`}
                disabled
                containerStyle={{ width: 50 }}
                style={{ textAlign: 'center' }}
            />
            <Button
                icon={<Icon name="plus" type="antdesign" />}
                type="outline"
                buttonStyle={cartItemAdjust.adjustButton}
                titleStyle={{ color: 'gray' }}
                onPress={increaseQuantity}
            />
        </View>
    );
};

export { CartItemAdjust };
