import React from 'react';
import { Icon, Header, Button } from 'react-native-elements';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adjust } from 'estore/helpers/adjust';

type NoRightIconHeaderProps = {
    name?: string;
};
const NoRightIconHeader = ({ name }: NoRightIconHeaderProps) => {
    const navigation = useNavigation();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={<Icon name="back" type="antdesign" color="black" />}
                />
            }
            centerComponent={
                name ? (
                    <Text
                        style={{
                            fontFamily: 'castoro',
                            fontSize: adjust(15),
                            letterSpacing: 1
                        }}
                    >
                        {name}
                    </Text>
                ) : undefined
            }
            backgroundColor="white"
        />
    );
};

export default React.memo(NoRightIconHeader);
