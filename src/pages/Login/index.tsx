// External Libraries
import React from "react";

// Styles
import {
  Container,
  LeftPanel,
  FormWrapper,
  Logo,
  Input,
  Button,
  LinkText,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <LeftPanel>
        <h1>Espresso Reads</h1>
        <p>Your comfy reading diary</p>
      </LeftPanel>
      <FormWrapper>
        <Logo src="/logo.png" alt="Espresso Reads Logo" />
        <h2>Login</h2>
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Button>Enter</Button>
        <LinkText href="/register">Create an account</LinkText>
      </FormWrapper>
    </Container>
  );
};

export default Login;
