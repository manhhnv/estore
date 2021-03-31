import React from 'react';
import { useGetBannersQuery } from 'estore/graphql/generated';
import Swiper from 'react-native-swiper';
import { View, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './styles';

const Banners = () => {
    const { loading, data, error } = useGetBannersQuery();
    if (loading) {
        return <ActivityIndicator size="large" color="#07ac4f" />
    }
    if (data?.getBanners?.items && data.getBanners.totalItems && data.getBanners.totalItems > 0) {
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
                        data.getBanners.items.map((banner, index) => {
                            if (banner) {
                                return (
                                    <View style={styles.slideItem} key={index}>
                                        <Image style={styles.image} source={{ uri: banner.url, cache: "only-if-cached" }} />
                                    </View>
                                )
                            }
                        })
                    }
                </Swiper>
            </View>
        )
    }
    return <View></View>
}
export default React.memo(Banners);