import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { cartItemAction } from './styles';

type CartItemActionProps = {
    lineId: string;
    removeOrderLineHandle: (lineId: string) => void;
};

const CartItemAction = React.memo(
    ({ lineId, removeOrderLineHandle }: CartItemActionProps) => {
        return (
            <TouchableOpacity
                style={cartItemAction.container}
                onPress={() => removeOrderLineHandle(lineId)}
            >
                <Text style={cartItemAction.deleteText}>Xóa</Text>
                <Icon name="delete" type="antdesign" color="white" />
            </TouchableOpacity>
        );
    }
);
export { CartItemAction };
