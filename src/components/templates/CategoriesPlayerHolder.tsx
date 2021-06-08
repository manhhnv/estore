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
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 30, marginBottom: 30 }}>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width  - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{ width: 0.25 * width,  justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <Placeholder Animation={ShineOverlay}>
                        <PlaceholderMedia
                            style={{
                                width: 0.25 * width - 30,
                                height: 0.25 * width - 30,
                                borderRadius: 100,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 0.25 * width - 20,
                                justifyContent: 'center'
                            }}
                        />
                    </Placeholder>
                </View>
            </TouchableWithoutFeedback>
            
        </View>
    );
};

export default React.memo(GridPlaceholder);
