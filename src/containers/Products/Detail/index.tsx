import React, { useState } from 'react';
import { useProductDetailQuery } from 'estore/graphql/generated';
import {
    ActivityIndicator,
    View,
    Text,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Rating from 'estore/components/Rating';
import ShopInfo from 'estore/components/ShopInfo';
import styles from './styles';
import ProductConfig from 'estore/containers/ProductConfig';
import { adjust } from 'estore/helpers/adjust';
// import BestSellingProducts from '../BestSellingProducts';

type ProductDetailProps = {
    productId: string;
};

const { width } = Dimensions.get('window');

const ProductDetail = ({ productId }: ProductDetailProps) => {
    const { called, data, loading, error } = useProductDetailQuery({
        variables: { productId: productId }
    });
    const [isVisible, setVisible] = useState(false);
    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator color="#ee4d2d" size="large" />
            </View>
        );
    } else if (called && data && data.productDetail) {
        let previews: Array<string | undefined> = [];
        if (data.productDetail.previews) {
            previews = data.productDetail.previews.map((pre) => {
                if (pre) {
                    return pre.url;
                }
            });
        }
        return (
            <React.Fragment>
                <ScrollView style={{ flex: 1 }}>
                    <Swiper
                        style={styles.wrapper}
                        loop={false}
                        renderPagination={(index, total) => {
                            return (
                                <View style={styles.paginationView}>
                                    <Text style={styles.paginationText}>
                                        {index + 1}/{total}
                                    </Text>
                                </View>
                            )
                        }}
                    >
                        {previews.map((uri, index) => {
                            return (
                                <View style={{flex:1}} key={index}>
                                    <Image
                                        style={styles.previewImage}                                    
                                        source={{
                                            uri: uri,
                                            cache: 'force-cache',
                                        }}                                                                                    
                                    />
                                </View>
                            );
                        })}
                    </Swiper>
                    <View style={styles.productDetailContainer}>
                        <Text style={styles.productName}>
                            {data.productDetail.name.length > 90
                                ? data.productDetail.name
                                      .slice(0, 90)
                                      .concat('...')
                                : data.productDetail.name}
                        </Text>
                        <Text style={styles.realPrice}>
                            ₫{' '}
                            {data.productDetail.price
                                ? data.productDetail.price
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                                : null}
                        </Text>
                        <Text style={styles.priceBeforeDiscount}>
                            ₫{' '}
                            {data.productDetail.priceBeforeDiscount
                                ? data.productDetail.priceBeforeDiscount
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                                : null}
                        </Text>
                        {data.productDetail.rating ? (
                            <Rating
                                rating={data.productDetail.rating}
                                soldQuantity={data.productDetail.soldQuantity}
                            />
                        ) : null}
                    </View>
                    <ShopInfo />
                    {/* không chuyển từ sp này sang sp khác được */}
                    {/* <BestSellingProducts></BestSellingProducts> */}
                </ScrollView>
                <View style={styles.addingButtonGroupContainer}>
                    <Button
                        key={1}
                        icon={
                            <Icon type="antdesign" name="heart" color="white" />
                        }
                        buttonStyle={[
                            styles.addingButtonCommon,
                            { backgroundColor: '#00bfa5', width: 0.3 * width }
                        ]}
                        containerStyle={styles.addingButtonContainer}
                    />
                    <Button
                        title="Thêm vào giỏ hàng"
                        key={2}
                        buttonStyle={[
                            styles.addingButtonCommon,
                            { backgroundColor: '#ee4d2d', width: 0.4 * width }
                        ]}
                        containerStyle={[
                            styles.addingButtonContainer,
                            { borderRightWidth: 0.5, borderRightColor: 'black' }
                        ]}
                        onPress={() => setVisible(!isVisible)}
                        titleStyle={{ fontSize: adjust(12) }}
                    />
                    <Button
                        title="Mua ngay"
                        key={3}
                        buttonStyle={[
                            styles.addingButtonCommon,
                            { backgroundColor: '#ee4d2d', width: 0.3 * width }
                        ]}
                        containerStyle={styles.addingButtonContainer}
                        titleStyle={{ fontSize: adjust(12) }}
                    />
                </View>
                {data.productDetail.id ? (
                    <ProductConfig
                        configs={data.productDetail.configs}
                        isVisible={isVisible}
                        setVisible={setVisible}
                        thumbnail={data.productDetail.thumbnail}
                        price={data?.productDetail?.price}
                        inStock={data?.productDetail?.inStock}
                        productId={data.productDetail.id}
                    />
                ) : null}
            </React.Fragment>
        );
    }
    return <View></View>;
};
export default React.memo(ProductDetail, (props, nextProps) => {
    if (props.productId !== nextProps.productId) {
        return true;
    }
    return false;
});
