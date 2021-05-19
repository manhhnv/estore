import * as React from 'react';
import { useWindowDimensions, Text, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import data from './data.json';
import { ListItem, Avatar } from 'react-native-elements';

const allMessages = data;
const unreadMessages = data.filter((m) => m.isRead == false);
type MessageTemplateType = {
    avatar: string;
    user: string;
    message: string;
    dateTime: {
        time: string;
        date: string;
    }
    isRead: boolean;
    id: number
}

const FirstRoute = () => {
    const renderItem = ({ item }: { item: MessageTemplateType }) => {
        return (
            <ListItem bottomDivider containerStyle={[!item.isRead ? { backgroundColor: "#fff2ee", }: {}]} >
                <Avatar source={{ uri: item.avatar }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{item.user}{item.isRead == false && ` (1)`}</ListItem.Title>
                    <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        );
    }
    return (
        <FlatList
            key={"_"}
            keyExtractor={(item) => '_' + item.id}
            data={allMessages}
            renderItem={renderItem}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
        />
    );
};

const SecondRoute = () => {
    const renderItem = ({ item }: { item: MessageTemplateType }) => {
        return (
            <ListItem bottomDivider containerStyle={{ backgroundColor: "#fff2ee", }} >
                <Avatar source={{ uri: item.avatar }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{item.user}{item.isRead == false && ` (1)`}</ListItem.Title>
                    <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        );
    }
    return (
        <FlatList
            key={"_"}
            keyExtractor={(item) => '_' + item.id}
            data={unreadMessages}
            renderItem={renderItem}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
        />
    );
};

const renderScene = SceneMap({
    all: FirstRoute,
    unRead: SecondRoute
});
const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#f36347' }}
        style={{ backgroundColor: 'white' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: 'black' }}>{route.title}</Text>
        )}
    />
);
export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'all', title: 'Tất cả' },
        { key: 'unRead', title: `Chưa đọc (${unreadMessages.length})` }
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    );
}
