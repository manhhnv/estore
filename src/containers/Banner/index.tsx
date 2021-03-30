import React, { useEffect } from 'react';
import { useGetBannersQuery } from 'estore/graphql/generated';
import { View } from 'react-native';

const Banners = () => {
    const { called, loading, data, error } = useGetBannersQuery();
    useEffect(() => {
        if (data?.getBanners?.items) {
            console.log(data.getBanners.items)
        }
    }, [data])
    return (
        <View></View>
    )
}
export default Banners;