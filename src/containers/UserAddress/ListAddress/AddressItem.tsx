import React from 'react';
import { Address } from 'estore/graphql/generated';
import { Text, View, TouchableOpacity } from 'react-native';
import { addressItemStyles } from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Button, Icon } from 'react-native-elements';
import { adjust } from 'estore/helpers/adjust';

type AddressItemProps = {
    item: Partial<Address>;
    removeAddressCallback: (id: string) => void;
};

type LeftComponentProps = {
    item: Partial<Address>;
    removeAddressCallback: (id: string) => void;
};

const LeftComponent = ({ item, removeAddressCallback }: LeftComponentProps) => {
    const removeAddressHandle = () => {
        if (item && item.id) {
            removeAddressCallback(item.id);
        }
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#03a9f4',
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Icon type="antdesign" name="infocirlceo" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#ee4d2d',
                    width: 75,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={removeAddressHandle}
            >
                <Icon type="antdesign" name="delete" color="white" />
            </TouchableOpacity>
        </View>
    );
};

export const AddressItem = ({
    item,
    removeAddressCallback
}: AddressItemProps) => {
    return (
        <Swipeable
            renderRightActions={() => {
                return (
                    <LeftComponent
                        item={item}
                        removeAddressCallback={removeAddressCallback}
                    />
                );
            }}
        >
            <View style={addressItemStyles.itemContainer}>
                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: adjust(12),
                        paddingVertical: 3
                    }}
                >
                    {item?.firstName + ' ' + item?.lastName}
                </Text>
                <Text style={{ paddingVertical: 3 }}>{item.phoneNumber}</Text>
                <Text style={{ paddingVertical: 3 }}>{item?.email}</Text>
                <Text
                    style={{ textTransform: 'capitalize', paddingVertical: 3 }}
                >
                    {item?.streetLine1}
                </Text>
                <Text
                    style={{ textTransform: 'capitalize', paddingVertical: 3 }}
                >
                    {item.ward + ' - ' + item.state + ' - ' + item.city}
                </Text>
                <Text>{item?.email}</Text>
                {item.isDefault ? (
                    <Text
                        style={{
                            position: 'absolute',
                            right: 10,
                            color: '#ee4d2d'
                        }}
                    >
                        [Mặc định]
                    </Text>
                ) : null}
            </View>
        </Swipeable>
    );
};
