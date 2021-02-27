import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { countDownStyles as styles } from './styles';

const CountDown = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Text style={styles.timeText}>Flash Sale </Text>
                <Icon type="entypo" name="rocket" color="#fff" size={28}/>
            </View>
            <Text style={styles.timeText}>20:24:25</Text>
        </View>
    )
}
export default CountDown;