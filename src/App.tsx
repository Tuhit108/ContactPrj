import * as React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View} from 'react-native';
import LoginScreen from '../src/screens/LoginScreen';
import BaseScreen from "../src/screens/BaseScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @ts-ignore
import styled from 'styled-components/native';
import UserScreen from "@/screens/UserScreen";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Stack = createNativeStackNavigator();
const App: React.FC = () => {
    return (
        <Container>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}
                                 initialRouteName='Login'
                >
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="BaseScreen" component={BaseScreen}/>
                    <Stack.Screen name="UserScreen" component={UserScreen}/>
                </Stack.Navigator>


            </NavigationContainer>


        </Container>
    );
};
export default App;
