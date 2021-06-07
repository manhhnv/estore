import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './style';

type FilterSelectionProps = {
    grid: boolean;
    setGrid: Dispatch<SetStateAction<boolean>>;
};

const ViewOption = ({ grid, setGrid }: FilterSelectionProps) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default React.memo(ViewOption);
