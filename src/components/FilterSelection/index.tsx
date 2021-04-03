import React, { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { Entypo, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

type FilterSelectionProps = {
  grid: boolean;
  setGrid: Dispatch<SetStateAction<boolean>>
}

const FilterSelection = ({grid, setGrid}: FilterSelectionProps) => {
  
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.filterSelectContainer}>
        <Octicons name="settings" size={23} style={styles.icon} />
        <Text style={styles.filterSelectText}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterSelectContainer}>
        <MaterialCommunityIcons name="sort" size={23} style={styles.icon} />

        <Text style={styles.filterSelectText}>Sort by</Text>
      </TouchableOpacity>

      {grid ? (
        <TouchableOpacity style={styles.iconContainer}>
          <Entypo name="grid" size={23} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.iconContainerNot}
          onPress={() => {
            setGrid(!grid);
          }}
        >
          <Entypo name="grid" size={23} style={styles.iconNot} />
        </TouchableOpacity>
      )}

      {grid ? (
        <TouchableOpacity
          style={styles.iconContainerNot}
          onPress={() => {
            setGrid(!grid);
          }}
        >
          <Entypo name="list" size={23} style={styles.iconNot} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.iconContainer}>
          <Entypo name="list" size={23} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FilterSelection;
