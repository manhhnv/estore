import React from 'react';
import { Header } from 'react-native-elements';
import { Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adjust } from 'estore/helpers/adjust';
import { Button, Icon } from 'react-native-elements';

const { width } = Dimensions.get('screen');

type UtilHeaderProps = {
    leftText: string;
};

const UtilHeader = ({ leftText }: UtilHeaderProps) => {
    const navigation = useNavigation();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={<Icon name="back" type="antdesign" color="#ee4d2d" />}
                />
            }
            centerComponent={
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
            backgroundColor="white"
        />
    );
};

export default React.memo(UtilHeader);
