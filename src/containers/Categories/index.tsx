import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useCategoriesQuery } from "estore/graphql/generated";
import GridPlaceholder from "estore/components/templates/GridPlaceholder";
import styles from "./styles";
import categoriesImages from './categoriesImages';
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { HomeStackParamList } from "estore/types";

const Categories = () => {
  const { data, loading, error } = useCategoriesQuery();
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
  if (loading) {
    return <GridPlaceholder />;
  }
  if (data?.categories) {
    return (
      <React.Fragment>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesChildContainer}>
            {data.categories.map((cate, index) => {
              if (cate) {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("FilterProduct", { categoryId: cate.id })}
                  >
                    <View style={styles.categoryBlock}>
                      <View style={styles.categoryLogoContainer}>
                        <View style={styles.categoryLogo}>
                          <Image
                            source={{
                              uri: categoriesImages[index],
                              cache: "force-cache"
                            }}
                            style={styles.categoryImage}
                            resizeMode="cover"
                          />
                        </View>
                      </View>

                      <Text style={styles.categoryName}>{cate?.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </React.Fragment>
    );
  }
  return <View></View>;
};
export default Categories;
