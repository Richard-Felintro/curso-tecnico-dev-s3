import styled from "styled-components";

//* Container do Header
export const HeaderContainer = styled.SafeAreaView`
  height: 20%;
  width: 100%;
  border-radius: 0 0 15px 15px;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fecc2b;
  /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); */
  shadow-color: 'black';
  shadow-opacity: 1;
  shadow-offset: 0px 20px;
  shadow-radius: 15px;
  elevation: 3;
`;  

//* Texto do Header
export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #333;
  font-family: Roboto_500Medium;
`;
