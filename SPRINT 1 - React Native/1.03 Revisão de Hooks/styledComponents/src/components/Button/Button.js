import styled from "styled-components";

export const BlueButton = styled.TouchableOpacity`
  height: 5%;
  width: 25%;

  border-width: 3px;
  border-radius: 25px;
  border-color: #66f;

  margin: 10px;
  justify-content: center;
  background-color: #00f;
`;

export const RedButton = styled(BlueButton)`
  background-color: #f00;
  border-color: #f66;
`;

export const GrayButton = styled(BlueButton)`
  background-color: #bbb;
  border-color: #999;
`;

export const ButtonText = styled.Text`
  color: #fff;
  width: 100%;
  font-size: 16;
  text-align: center;
  vertical-align: center;
`;
