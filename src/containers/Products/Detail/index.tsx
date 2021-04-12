import React from 'react';
import { useProductDetailQuery } from 'estore/graphql/generated';
import { ActivityIndicator, View } from 'react-native';
import Banner from 'estore/components/Banner';

type ProductDetailProps = {
    productId: string
}

const ProductDetail = ({productId}: ProductDetailProps) => {
    const { called, data, loading, error } = useProductDetailQuery({ variables: { productId: productId } })
    if (loading) {
        return <ActivityIndicator color="black" size="large" />
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
            <View style={{ flex: 1 }}>
                <Banner sources={previews}/>
            </View>
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