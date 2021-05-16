import { adjust } from 'estore/helpers/adjust';
import React from 'react';
import { Text, View } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import styles from './styles';

const list = [
    {
        name: 'Amy Farha',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        // subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        // subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    }
];

const HistorySearch = () => {
    return (
        <View>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider containerStyle={{ paddingVertical: 10 }}>
                        <ListItem.Content>
                            <ListItem.Title style={{ fontSize: adjust(12) }}>{l.name}</ListItem.Title>
                            <ListItem.Subtitle style={{ fontSize: adjust(10) }}>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            <ListItem key={100} bottomDivider containerStyle={{ paddingVertical: 10 }}>
                <ListItem.Content>
                    <ListItem.Title style={{ fontSize: adjust(11), alignSelf: 'center' }}>Hiển thị nhiều hơn</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
    );
};

export default React.memo(HistorySearch);
