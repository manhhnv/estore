import React, { ReactChild } from 'react';
import { View, Text, GestureResponderEvent, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';
import styles, {
    progressItemStyles as itemStyles
} from 'estore/components/ProgressBar/styles';

type ProgressItemProps = {
    active?: boolean;
    queuing?: boolean;
    completed?: boolean;
    name: string;
    alias: string;
    onPress?: (event: GestureResponderEvent) => void;
};

export const ProgressItem = ({
    active,
    queuing,
    completed,
    name,
    onPress,
    alias
}: ProgressItemProps) => {
    let stateItem = <Text style={itemStyles.queuingStepText}>{alias}</Text>;
    if (active) {
        stateItem = <Text style={itemStyles.activeStepText}>{alias}</Text>;
    } else if (completed) {
        stateItem = (
            <Icon type="antdesign" name="circledown" color="white" size={30} />
        );
    }
    return (
        <View
            style={
                active || completed
                    ? itemStyles.activeItem
                    : itemStyles.queuingItem
            }
            onTouchStart={onPress}
        >
            {stateItem}
            <Text style={itemStyles.name} onPress={() => {}}>
                {name}
            </Text>
        </View>
    );
};

type ProgressBarProps = {
    onChange?: (event: GestureResponderEvent) => void;
    children?: ReactChild[];
    style?: ViewStyle;
};

const ProgressBar = ({ children, style }: ProgressBarProps) => {
    return (
        <React.Fragment>
            <View style={[styles.lineStyle, style]}></View>
            <View style={styles.progressContainer}>{children}</View>
        </React.Fragment>
    );
};
export { ProgressBar };
