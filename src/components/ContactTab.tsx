import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { View,TouchableOpacity} from 'react-native';
import {ICON} from "@/assets/icons";

const WraperView = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const HeaderView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  top: 0;
  height: 100%;
`;
const MenuImage = styled.Image`
  margin-left: 10px;
`;
const CamImage = styled.Image`
  margin-right: 10px;
`;
const HeaderText = styled.Text`
  left: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333333;
`;
const ContentView = styled.View`
  flex: 10;
  width: 100%;
`;
const SearchView = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const SearchChildView = styled.View`
  background-color: #F2F2F2;
  align-items: center;
  width: 95%;
  height: 70%;
`;
const SearchIconImage  =styled.Image`
`;
const SearchTextInput =styled.TextInput`
`;

const MainContentView = styled.View`
  flex: 9;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ListView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  border-bottom-color: #F5F5F5;
  border-bottom-width: 1px;
`;
const LeftItemView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconDetailImage = styled.Image`
  margin-left: 15px;
  margin-right: 15px;
`;
const NameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 2px;
`;
const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
  margin-bottom: 2px;
`;

const Text = styled.Text`
  
`;
// @ts-ignore
const ContactTab: React.FC = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <WraperView>
          <HeaderView>
            <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
              <MenuImage source={ICON.MoreIc}/>
            </TouchableOpacity>
            <HeaderText
            >
              Liên Hệ
            </HeaderText>
            <TouchableOpacity onPress={() => {
              navigation.navigate('UserScreen');
            }}>
              <CamImage source={ICON.CamIc}/>
            </TouchableOpacity>
          </HeaderView>
          <ContentView>
            <SearchView>
                <SearchChildView>
                </SearchChildView>
            </SearchView>
            <MainContentView></MainContentView>
          </ContentView>
        </WraperView>
    );
  };

export default ContactTab;
