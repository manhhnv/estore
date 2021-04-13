import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Wishlist from "estore/containers/Wishlist"

const WishlistScreen = () => {
    return (
        <View
            style={{ flex: 1 }}
        >
            {/* <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
            />
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            ) : null} */}
            <Wishlist />
        </View>
    );
}
export default WishlistScreen

