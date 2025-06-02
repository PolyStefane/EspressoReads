// External Libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
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
      const username = response?.username;
      const userId = response?.id;

      console.log("RESPOSTA DA API:", response);

      if (userId) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username || "User");
        navigate("/home");
      } else {
        console.error("userId está indefinido. Verifique a resposta da API.");
      }
    } catch (error) {
      console.error("Login failed:", error);
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
              name="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              autoComplete="email"
            />
            <Input
              type="password"
              required
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button type="submit">Enter</Button>
            </ButtonContainer>
          </form>
          <LinkText href="/register">Create an account</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Login;
