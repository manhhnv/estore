import React from 'react';
import * as banners from './data.json';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import styles from 'estore/containers/Collection/styles';

const Collections = () => {
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                autoplay
                showsPagination={true}
                containerStyle={{ maxHeight: 200 }}
                activeDotStyle={{ backgroundColor: "white" }}
                autoplayTimeout={6}
            >
                {
                    banners.items.map((slider, index) => (
                        <View style={styles.slideItem} key={index}>
                            <Image style={styles.image} source={{ uri: slider.source }} />
                        </View>
                    ))
                }
            </Swiper>
        </View>
    )
}
export default Collections;