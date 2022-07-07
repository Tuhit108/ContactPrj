import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import ContactTab from "../components/ContactTab";
import HistoryTab from "../components/HistoryTab";
import  { ICON } from "../../../YourApp/src/assets/icons/";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Text = styled.Text`
  
`;
const ContactView = styled.View`
  align-items: center;
  padding-top:30px;
  padding-bottom: 30px;
`;
const HistoryView = styled.View`
  align-items: center;
  padding-top:30px;
  padding-bottom: 30px;
`;
const ContactImg = styled.Image`

`;
const ClockImg = styled.Image``;
const ContactText = styled.Text `
font-size :10px;
  color: #FFFFFF;
`;
const HistoryText = styled.Text `
font-size :10px;
  color: #FFFFFF;
`;
const ContactScreen: React.FC = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#F2A54A',
            height: '10%',
          },
        }}
        initialRouteName='History'>

        <Tab.Screen
          name="Contact"
          component={ContactTab}
          options={{
            tabBarIcon: ({focused}) => (
              <ContactView>
                    <ContactImg source={ICON.CONTACT_IC}></ContactImg>
                <ContactText > Danh bạ</ContactText>
              </ContactView>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryTab}
          options={{
            tabBarIcon: ({focused}) => (
              <HistoryView>
                    <ClockImg source={ICON.CLOCK_IC}></ClockImg>
                <HistoryText > Gần đây</HistoryText>
              </HistoryView>
            ),
          }}
        />
      </Tab.Navigator>
  );
};
export default ContactScreen;
