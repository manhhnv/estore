import React from 'react';
import { Text, View } from 'react-native';
import { Rating as RNRating } from 'react-native-elements';
import styles from './styles';

type RatingProps = {
    rating: number;
    soldQuantity?: number | null;
};

const Rating = ({ rating, soldQuantity }: RatingProps) => {
    return (
        <View style={styles.ratingContainer}>
            <RNRating readonly startingValue={rating} imageSize={18} />
            <Text style={styles.ratingValue}>{rating.toFixed(1)}</Text>
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
