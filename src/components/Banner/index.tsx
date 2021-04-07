import React from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './styles';

type BannerProps = {
    sources: Array<string | undefined>
}

const Banners = ({ sources }: BannerProps) => {
    if (sources.length > 0) {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    autoplay
                    showsPagination={true}
                    containerStyle={{ maxHeight: 270 }}
                    activeDotStyle={{ backgroundColor: 'white' }}
                    autoplayTimeout={6}
                >
                    {sources.map((uri, index) => {
                        return (
                            <View style={styles.slideItem} key={index}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: uri,
                                        cache: 'force-cache'
                                    }}
                                    resizeMode="contain"
                                    containerStyle={{ backgroundColor: 'black' }}
                                />
                            </View>
                        );
                    })}
                </Swiper>
            </View>
        );
    }
    else return <View />
};
export default React.memo(Banners);
