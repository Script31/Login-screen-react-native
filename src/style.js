import styled from 'styled-components/native';

export const KeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: #191919;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 10px;

  background-color: transparent;
`;

export const Imagem = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 50px;
  margin-top: 10px;

  background: #fff;

  border-radius: 4px;
  padding: 5px;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  background: #7950c1;
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;

export const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;
