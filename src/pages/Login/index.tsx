// External Libraries
import React from "react";

// Styles
import {
  Logo,
  Title,
  Input,
  Button,
  Subtitle,
  LinkText,
  Container,
  LeftPanel,
  RightPanel,
  FormWrapper,
  ImageTopLeft,
  ImageBottomLeft,
  LeftTextWrapper,
  ButtonContainer,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <LeftPanel>
        <ImageTopLeft src="\img\book1.png" />
        <LeftTextWrapper>
          <Title>Espresso Reads</Title>
          <Subtitle>Your comfy reading diary</Subtitle>
        </LeftTextWrapper>
        <ImageBottomLeft src="\img\book2.png" />
      </LeftPanel>

      <RightPanel>
        <FormWrapper>
          <Logo src="\img\mini-logo.png" alt="Espresso Reads Logo" />
          <h2>Login</h2>
          <Input type="email" placeholder="Enter your email..." />
          <Input type="password" placeholder="Enter your password..." />
          <ButtonContainer>
            <Button>Enter</Button>
          </ButtonContainer>
          <LinkText href="/register">Create an account</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Login;
