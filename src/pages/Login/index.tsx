import React from "react";
import {
  Container,
  LeftPanel,
  RightPanel,
  Logo,
  Input,
  Button,
  LinkText,
  FormWrapper,
  ImageTopLeft,
  ImageBottomLeft,
  LeftTextWrapper,
  Title,
  Subtitle,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <LeftPanel>
        <ImageTopLeft src="public\img\book1.png" />
        <LeftTextWrapper>
          <Title>Espresso Reads</Title>
          <Subtitle>Your comfy reading diary</Subtitle>
        </LeftTextWrapper>
        <ImageBottomLeft src="public\img\book2.png" />
      </LeftPanel>

      <RightPanel>
        <FormWrapper>
          <Logo src="public\img\mini-logo.png" alt="Espresso Reads Logo" />
          <h2>Login</h2>
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <Button>Enter</Button>
          <LinkText href="/register">Create an account</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Login;
