import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  Keyboard,
  View,
} from "react-native";

import {
  MaterialIcons,
  Feather,
  Entypo,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

import styles from "./style";

const FilterSelection = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.filterSelectContainer}
      >
        <Octicons name="settings" size={23} style={styles.icon} />
        <Text style={styles.filterSelectText}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterSelectContainer}
      >
        <MaterialCommunityIcons name="sort" size={23}  style={styles.icon}/>

        <Text style={styles.filterSelectText}>Sort by</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Entypo name="grid" size={23} style={styles.icon}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconContainer}>
        <Entypo name="list" size={23} style={styles.icon}/>
      </TouchableOpacity>
      
    </View>
  );
};

export default FilterSelection;
