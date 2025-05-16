// External Libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/AuthService";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.token);
      navigate("/home");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button type="submit" onClick={handleLogin}>
                Enter
              </Button>
            </ButtonContainer>
          </form>
          <LinkText href="/register">Create an account</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Login;
