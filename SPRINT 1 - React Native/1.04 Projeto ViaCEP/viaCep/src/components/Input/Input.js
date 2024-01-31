import styled from "styled-components";

//* Container do Input
export const InputBox = styled.View`
  height: 90px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10%;
`;

export const InputContainerDouble = styled(InputBox)`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBoxSmall = styled(InputBox)`
  width: 20%;
  padding: 0;
`;

export const InputBoxMedium = styled(InputBox)`
  width: 70%;
  padding: 0;
`;

export const InputLabel = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 18px;
  color: #047cd3;
  width: 100%;
`;
export const Input = styled.TextInput`
  height: 66px;
  width: 100%;

  font-family: Roboto_500Medium;
  font-size: 18px;
  color: #a1a1a1;

  border-radius: 10px;
  border-color: #a1a1a1;
  border-width: 2px;
  padding: 20px;
`;
