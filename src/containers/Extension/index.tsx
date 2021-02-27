import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Extension = () => {
    return (
        <View style={{ alignItems: "center", marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "#07ac4f", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="rocket1" reverse color="#07ac4f" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Flash Sale</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "orange", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="pay-circle1" reverse color="orange" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Payment</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "#1b8be5", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="earth" reverse color="#1b8be5" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>World</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "red", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="wifi" reverse color="red" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Shop Live</Text>
                    </View>
                </ListItem>
            </ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "red", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="home" reverse color="red" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Market</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "#3f51b5", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="areachart" reverse color="#3f51b5" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Deal</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "#8bc34a", borderRadius: 20 }}
                            icon={
                                <Icon type="material-community" name="truck-delivery" reverse color="#8bc34a" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>Delivery</Text>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{ flexDirection: "column" }}>
                        <Button
                            type="outline"
                            buttonStyle={{ borderColor: "#07ac4f", borderRadius: 20 }}
                            icon={
                                <Icon type="antdesign" name="questioncircle" reverse color="#07ac4f" size={10} />
                            }
                        />
                        <Text style={{ textAlign: "center", fontSize: 12 }}>FAQ</Text>
                    </View>
                </ListItem>
            </ScrollView>
        </View>
    )
}
export default Extension;