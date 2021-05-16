import { adjust } from 'estore/helpers/adjust';
import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const PopularSearch = () => {
    return (
        <View style={{ backgroundColor: "white", marginTop: 20 }}>
            <Text style={styles.title}>Tìm kiếm phổ biến</Text>
            <View
                style={styles.popularContainer}
            >
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        Mỹ phẩm Korea
                    </Text>
                    <Image
                        source={{
                            uri:
                                'http://miraso.vn/upload/baiviet/myphamhanquocmoinhat-1469.jpg'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        Sneaker nam
                    </Text>
                    <Image
                        source={{
                            uri:
                                'https://chicos.vn/wp-content/uploads/2019/07/9535199410_1885848294.jpg'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        T-Shirt
                    </Text>
                    <Image
                        source={{
                            uri:
                                'http://dotilo.com/image/catalog/coupon/aotron/trang.jpg'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        Balo
                    </Text>
                    <Image
                        source={{
                            uri:
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13P2OEPoifj5I-byojHoog3kDe4Nv_kY5Dw&usqp=CAU'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        Trang sức nữ
                    </Text>
                    <Image
                        source={{
                            uri:
                                'https://cf.shopee.vn/file/9758ea55cff25b56b592b4fe94409c05'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
                <View
                    style={styles.popularWrapperItem}
                >
                    <Text
                        style={styles.popularName}
                    >
                        Đồng hồ LED
                    </Text>
                    <Image
                        source={{
                            uri:
                                'https://cf.shopee.vn/file/1f633a5edaa81a49185f6faae0ee7958'
                        }}
                        style={styles.popularThumbnail}
                    />
                </View>
            </View>
        </View>
    );
};

export default React.memo(PopularSearch);
