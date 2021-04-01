import React from 'react';
import {
    SafeAreaView, View, TouchableOpacity, Text, Image, Dimensions
} from 'react-native';
import { useCategoriesQuery } from 'estore/graphql/generated';
import Grid from 'estore/components/ProductsList/Grid';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles'

const { width } = Dimensions.get('window');

const categoriesImage = () => {
    return [
        {
            id: 1,
            uri: "https://modest101.com/wp-content/uploads/2019/09/Fashion-Accessories.jpg"
        },
        {
            id: 2,
            uri: "https://i.pinimg.com/originals/24/76/7c/24767c7a4715c0e60a6e3daad6597069.jpg"
        },
        {
            id: 3,
            uri: "https://www.coverstory.co.in/media/cms/home/category/work.jpg"
        },
        {
            id: 4,
            uri: "https://i.ebayimg.com/images/g/YnAAAOSwmFVeGJDN/s-l640.jpg"
        },
        {
            id: 5,
            uri: "https://d26dm7ayqnmdyf.cloudfront.net/wp-content/uploads/2016/02/statement-jewelry-542x407.jpg"
        },
        {
            id: 6,
            uri: "https://i.pinimg.com/736x/6a/e1/68/6ae168ef0639053b304b1c93cdd94e46.jpg"
        },
        {
            id: 7,
            uri: "https://i.pinimg.com/originals/a0/e4/89/a0e489c98249fcecb8ae594a20add51e.jpg"
        },
        {
            id: 8,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf88GLxIT_eGJVj5c1cU664qwd9-F33P3gGNBP9EyLyCv3ZletxhB_MkYDqrgF-Hs4jXM&usqp=CAU"
        },
    ]
}

const Categories = () => {
    const { data, loading, error } = useCategoriesQuery();
    if (loading) {
        return (
            <GridPlaceholder />
        )
    }
    if (data?.categories) {
        return (
            <React.Fragment>
                <View style={styles.categoriesContainer}>
                    <View style={styles.categoriesChildContainer}>
                        {
                            data.categories.map((cate, index) => {

                                return (
                                    <TouchableOpacity key={index}>
                                        <View style={styles.categoryBlock}>
                                            <View style={styles.categoryLogoContainer}>
                                                <View style={styles.categoryLogo}>
                                                    <Image
                                                        source={{
                                                            uri: categoriesImage().filter((item) => item.id === cate?.id)[0].uri
                                                        }}
                                                        style={styles.categoryImage}
                                                        resizeMode="cover"
                                                    />
                                                </View>
                                            </View>
                                           
                                    
                                            <Text style={styles.categoryName}>
                                                {cate?.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </React.Fragment>
        )
    }
    return (
        <View></View>
    )
}
export default Categories;