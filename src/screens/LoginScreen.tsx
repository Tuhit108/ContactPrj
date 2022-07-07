import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import  { IMAGE } from "../assets/imgs/";
import  { ICON } from "../../../YourApp/src/assets/icons/";


const Container = styled.View`
  flex: 1;
  
`;
const Section1 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const GrImage = styled.Image `
  
`;
const GrBackGround = styled.Image `
  position: absolute;
  width: 100%;
  bottom: 0;
`;
const Section2 = styled.View`
  flex: 1;
  align-items: center;
`;
const AppName = styled.Text`
  color: #F2A54A;
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
`;
const AppDes = styled.Text`
  color: #333333;
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
`;
const LoadIcon = styled.Image `
  position: absolute;
  bottom: 50px;
`;
const Section3 = styled.View`
  flex: 1;
  align-items: center;
`;
const LoginView = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  align-items: center;
`;
const LoginText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  font-style: italic;
  color: #828282;
`;
const LoginBtn01 =  styled.TouchableOpacity`
  margin-top: 12px;
  width: 85%;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #F2A54A;
  border-radius: 4px;
`;
const TextLogin01 = styled.Text`
color: white;
  font-size: 15px;
  font-weight: 500;
  
`;
const LoginBtn02 =  styled.TouchableOpacity`
  margin-top: 12px;
  width: 85%;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: #F2A54A;
`;
const TextLogin02 = styled.Text`
color: #F2A54A;
  font-size: 15px;
  font-weight: 500;
  
`;



// @ts-ignore
const LoginScreen: React.FC = ({navigation}) => {
  return (
    <Container>
      <Section1>

        <GrBackGround source={IMAGE.GR_BACKGROUND} ></GrBackGround>
        <GrImage source={IMAGE.GR_LOGO} ></GrImage>
      </Section1>
      <Section2>
        <AppName>Base contact</AppName>
        <AppDes>{'Giải pháp quản lý công việc\n & dự án toàn diện cho doanh nghiệp 4.0'}</AppDes>
        <LoadIcon source={ICON.LOADING_IC}></LoadIcon>
      </Section2>
      <Section3>
        <LoginView>
        <LoginText>Bạn chưa đăng nhập</LoginText>
        <LoginBtn01 onPress={() => {
                navigation.navigate('BaseScreen');
              }}>
          <TextLogin01>ĐĂNG NHẬP BẰNG BASEACCOUT</TextLogin01>
        </LoginBtn01>
          <LoginBtn02 onPress={() => {
              navigation.navigate('BaseScreen');
          }}>
            <TextLogin02>ĐĂNG NHẬP THỦ CÔNG</TextLogin02>
          </LoginBtn02>
        </LoginView>
      </Section3>

    </Container>
  );
};
export default LoginScreen;
