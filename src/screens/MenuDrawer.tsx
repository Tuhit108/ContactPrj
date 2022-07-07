import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import {StyleSheet, View,  Image, SafeAreaView} from 'react-native';
import {ICON} from "@/assets/icons";
import {IMAGE} from "@/assets/imgs";

const collections = [
  {id: 1, name: 'All'},
  {id: 2, name: 'General'},
  {id: 3, name: 'Investors'},
  {id: 4, name: 'Lead'},
  {id: 5, name: 'VIP'},
];
const WraperView = styled.View`
  flex: 1;
`;
const DrawewHeaderView = styled.View`
  background-color:#F2A54A ;
  height: 85px;
`;
const ChildView = styled.View`
  flex-direction: row ;
  position: absolute;
  bottom: 0px;
`;
const AvartarImage = styled.Image`
margin-left: 20px;
  margin-right: 12px;
  margin-bottom: 12px;
`;
const UserView = styled.View`
  flex-direction: column ;
`;
const UserNameText = styled.Text`
  
`;
const Text = styled.Text`
  
`;
const MenuDrawer: React.FC = () => {
  return (
      <WraperView >

        <DrawewHeaderView  >
          <ChildView >
            <AvartarImage
                source={IMAGE.Avartar}

            />
            <UserView >
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                {' '}
                Nguyễn Tiến Nam
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFF'}}>
                {' '}
                Admin
              </Text>
            </UserView>
          </ChildView>
        </DrawewHeaderView >
        <View style={styles.drawercontent}>
          <View
              style={{
                height: 60,
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
              }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={ICON.NewIc} style={styles.itemicon} />
              <Text style={styles.itemname}> New collection</Text>
            </View>
          </View>
          <View
              style={{
                height: 40,
                justifyContent: 'center',
                backgroundColor: 'rgba(242, 165, 74, 0.1)',
              }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                  source={ICON.PlayIc}
                  style={{marginLeft: 16, marginRight: 16, top: 8}}
              />
              <Text style={{fontSize: 14, fontWeight: '700', color: '#333333'}}>
                COLLECTIONS
              </Text>
              <Text style={{position: 'absolute', fontSize: 13, fontWeight: '500', color: '#F2A54A',right: 12}}>
                edit
              </Text>

            </View>
          </View>
          <View>
            {collections.map(({id, name}) => (
                <View key={id} style={{justifyContent: 'center', height: 40}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={ICON.ContactIc} style={styles.itemicon} />
                    <Text style={styles.itemname}> {name} </Text>
                  </View>
                </View>
            ))}
          </View>
        </View>
      </WraperView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerheader: {
    backgroundColor: '#F2A54A',
    height: 85,
  },
  drawercontent: {},
  itemicon: {
    marginLeft: 20,
    marginRight: 20,
  },
  itemname: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
  },
});

export default MenuDrawer;
