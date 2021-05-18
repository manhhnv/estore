import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { View, Text } from 'react-native';
import Rating from 'estore/components/Rating';
import styles from './styles';
import reviews from './data.json';

const Review = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white", marginTop: 12, paddingHorizontal: 15 }}>
            <Text style={[styles.productName, { textAlign: "center", color: "#ee4d2d" }]}>Đánh giá (5)</Text>
            {
                reviews.map((review, index) => {
                    return (
                        <ListItem.Content key={index} style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Avatar rounded source={{ uri: review?.avatar }} />
                                <View>
                                    <Text>{review?.username}</Text>
                                    <Rating rating={review?.rating} size={10} />
                                    <Text style={{ marginTop: 8 }}>{review?.content}</Text>
                                </View>
                            </View>
                        </ListItem.Content>
                    )
                })
            }
        </View>
    )
}

export default React.memo(Review);

