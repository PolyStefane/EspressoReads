// External Libraries
import React from "react";

// Styles
import {
  Logo,
  Input,
  Button,
  LinkText,
  Container,
  LeftPanel,
  FormWrapper,
} from "./styles";

const Register: React.FC = () => {
  return (
    <Container>
      <LeftPanel>
        <h1>Espresso Reads</h1>
        <p>Your comfy reading diary</p>
      </LeftPanel>
      <FormWrapper>
        <Logo src="/logo.png" alt="Espresso Reads Logo" />
        <h2>Cadastro</h2>
        <Input type="text" placeholder="Enter your user name" />
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Input type="password" placeholder="Repeat your password" />
        <Button>Register</Button>
        <LinkText href="/">Already have an account?</LinkText>
      </FormWrapper>
    </Container>
  );
};

export default Register;
