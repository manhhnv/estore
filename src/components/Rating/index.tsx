import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { Rating as RNRating } from 'react-native-elements';
import styles from './styles';

interface RatingProps extends ViewProps {
    rating: number;
    soldQuantity?: number | null;
    size: number
    showText?: boolean;
};

const Rating = ({ rating, soldQuantity, size, showText }: RatingProps) => {
    return (
        <View style={styles.ratingContainer}>
            <RNRating readonly startingValue={rating} imageSize={size} />
            {
                showText ? (
                    <Text style={styles.ratingValue}>{rating.toFixed(1)}</Text>
                ) : null
            }
            {soldQuantity ? (
                <React.Fragment>
                    <View
                        style={{
                            height: 20,
                            width: 1,
                            backgroundColor: '#e0e0e0',
                            marginLeft: 20
                        }}
                    ></View>
                    <Text style={styles.ratingValue}>
                        {` ${
                            soldQuantity > 1000
                                ? Math.round(soldQuantity / 100) / 10 + 'K '
                                : soldQuantity
                        }  Đã bán`}
                    </Text>
                </React.Fragment>
            ) : null}
        </View>
    );
};
export default React.memo(Rating);
