import React from "react";

import {
  Container,
  Title,
  KeyboardAvoid,
  Imagem,
  Input,
  Btn,
  BtnLogin
} from "./style";

function App() {
  return (
    <KeyboardAvoid>
      <Container>
        <Imagem source={require("./images/assets/logo.png")} />
      </Container>

      <Container>
        <Input
          type="text"
          placeholder="provide your email"
          autoCorrect={false}
          onChange={() => {}}
        />

        <Input
          type="password"
          placeholder=" Provide your password"
          autoCorrect={false}
          onChange={() => {}}
        />

        <BtnLogin>
          <Title> Access</Title>
        </BtnLogin>

        <Btn>
          <Title> create free count</Title>
        </Btn>
      </Container>
    </KeyboardAvoid>
  );
}
export default App;
