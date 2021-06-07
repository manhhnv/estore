import React from 'react';
import { View, FlatList } from 'react-native';
import templates from './data.json';
import { ListItem, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Notifications = () => {
    return (
        <ScrollView>
            {templates.map((template, index) => {
                return (
                    <ListItem key={index} containerStyle={[!template.isRead ? { backgroundColor: "#fff2ee", }: {}]} bottomDivider>
                        <Image source={{uri: template.image}} style={{ width: 55, height: 55 }}/>
                        <ListItem.Content >
                            <ListItem.Title>{template.title}</ListItem.Title>
                            <ListItem.Subtitle>{template.description}</ListItem.Subtitle>
                            <ListItem.Subtitle>{`${template.dateTime.time}, ${template.dateTime.date}`}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )
            })}
        </ScrollView>
    )
}

export default React.memo(Notifications);
