import React from 'react';
import {
    PlaceholderMedia,
    Placeholder,
    ShineOverlay,
    PlaceholderLine
} from 'rn-placeholder';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const GridPlaceholder = () => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.5 * width }}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.5 * width - 15,
                                margin: 7.5,
                                height: 220
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.4 * width,
                                justifyContent: 'center'
                            }}
                        />
                        <PlaceholderLine style={{ width: 0.4 * width }} />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.5 * width }}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.5 * width - 15,
                                margin: 7.5,
                                height: 220
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.4 * width,
                                justifyContent: 'center'
                            }}
                        />
                        <PlaceholderLine style={{ width: 0.4 * width }} />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.5 * width }}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.5 * width - 15,
                                margin: 7.5,
                                height: 220
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.4 * width,
                                justifyContent: 'center'
                            }}
                        />
                        <PlaceholderLine style={{ width: 0.4 * width }} />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.5 * width }}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.5 * width - 15,
                                margin: 7.5,
                                height: 220
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.4 * width,
                                justifyContent: 'center'
                            }}
                        />
                        <PlaceholderLine style={{ width: 0.4 * width }} />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default React.memo(GridPlaceholder);
