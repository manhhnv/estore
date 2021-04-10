import React from 'react';
import { useProductDetailQuery } from 'estore/graphql/generated';
import { ActivityIndicator, View, Text, ScrollView, Dimensions } from 'react-native';
import Banner from 'estore/components/Banner';
import { adjust } from 'estore/helpers/adjust';
import { Button, Icon } from 'react-native-elements';
import Rating from 'estore/components/Rating';
import ShopInfo from 'estore/components/ShopInfo';
import styles from './styles';

type ProductDetailProps = {
    productId: string
}

const { width } = Dimensions.get('window');

const ProductDetail = ({ productId }: ProductDetailProps) => {
    const { called, data, loading, error } = useProductDetailQuery({ variables: { productId: productId } })
    if (loading) {
        return <ActivityIndicator color="coral" size="large" />
    }
    else if (called && data && data.productDetail) {
        let previews: Array<string | undefined> = [];
        if (data.productDetail.previews) {
            previews = data.productDetail.previews.map(pre => {
                if (pre) {
                    return pre.url
                }
            })
        }
        return (
            <React.Fragment>
                <ScrollView style={{ flex: 1 }}>
                    <Banner sources={previews} />
                    <View style={{ paddingHorizontal: 10, backgroundColor: "white", paddingBottom: 30 }}>
                        <Text style={{
                            fontFamily: 'serif', fontSize: adjust(13), letterSpacing: 0.5, lineHeight: 25, marginTop: 12
                        }}>
                            {data.productDetail.name.length > 90 ? data.productDetail.name.slice(0, 90).concat('...') : data.productDetail.name}
                        </Text>
                        <Text style={styles.realPrice}>
                            ₫ {data.productDetail.price
                                ? data.productDetail.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : null}
                        </Text>
                        <Text style={styles.priceBeforeDiscount}>
                            ₫ {data.productDetail.priceBeforeDiscount
                                ? data.productDetail.priceBeforeDiscount
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
                </ScrollView>
                <View style={styles.addingButtonGroupContainer}>
                    <Button key={1}
                        icon={<Icon type="antdesign" name="heart" color="white" />}
                        buttonStyle={[styles.addingButtonCommon, { backgroundColor: '#00bfa5', width: 0.3 * width }]}
                        containerStyle={styles.addingButtonContainer}
                    />
                    <Button
                        title="Thêm vào giỏ hàng"
                        key={2}
                        buttonStyle={[styles.addingButtonCommon, { backgroundColor: 'coral', width: 0.4 * width }]}
                        containerStyle={[styles.addingButtonContainer, { borderRightWidth: 0.5, borderRightColor: 'black' }]}
                    />
                    <Button
                        title="Mua ngay"
                        key={3}
                        buttonStyle={[styles.addingButtonCommon, { backgroundColor: 'coral', width: 0.3 * width }]}
                        containerStyle={styles.addingButtonContainer}
                    />
                </View>
            </React.Fragment>
        )
    }
    return <View></View>
}
export default React.memo(ProductDetail, (props, nextProps) => {
    if (props.productId !== nextProps.productId) {
        return true;
    }
    return false;
});