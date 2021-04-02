import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from 'estore/screens/HomeScreen';
import FilterProductsScreen from 'estore/screens/FilterProductsScreen';


const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="filter-product"
        component={FilterProductsScreen}
        options={{
          headerShown: false
        }}
      />
      
    </Stack.Navigator>
  )
}
