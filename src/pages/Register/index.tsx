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
  ImageTopLeft,
  LeftTextWrapper,
  Title,
  Subtitle,
  ImageBottomLeft,
  RightPanel,
  ButtonContainer,
} from "./styles";

const Register: React.FC = () => {
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
          <h2>Cadastro</h2>
          <Input type="text" placeholder="Enter your username..." />
          <Input type="email" placeholder="Enter your email..." />
          <Input type="password" placeholder="Enter your password..." />
          <Input type="password" placeholder="Repeat your password..." />
          <ButtonContainer>
            <Button>Register</Button>
          </ButtonContainer>
          <LinkText href="/">Already have an account?</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Register;
