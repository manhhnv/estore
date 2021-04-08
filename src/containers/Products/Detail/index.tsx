import React from 'react';
import { useProductDetailQuery } from 'estore/graphql/generated';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';
import Banner from 'estore/components/Banner';
import { adjust } from 'estore/helpers/adjust';

type ProductDetailProps = {
    productId: string
}

const ProductDetail = ({productId}: ProductDetailProps) => {
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
            <ScrollView style={{ flex: 1 }}>
                <Banner sources={previews}/>
               <View style={{ paddingHorizontal: 10 }}>
               <Text style={{
                    fontFamily: 'serif', fontSize: adjust(13), letterSpacing: 0.5, lineHeight: 25
                    }}>
                    {data.productDetail.name}
                </Text>
                <Text>
                    {data.productDetail.price}
                </Text>
               </View>
            </ScrollView>
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