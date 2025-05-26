// External Libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Services/AuthService";

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
  LeftTextWrapper,
  ImageBottomLeft,
  ButtonContainer,
} from "./styles";

const Register: React.FC = () => {
  // Hooks
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userPicture = "https://imagem.com/avatar.jpg";

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await register({ userPicture, userName, email, password });
      alert("Usuário registrado com sucesso!");
      navigate("/");
    } catch (error: any) {
      console.error("Erro ao registrar:", error);
      alert(error.message || "Erro desconhecido");
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
          <h2>Cadastro</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <Input
              type="text"
              required
              placeholder="Enter your username..."
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="email"
              required
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              required
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              required
              placeholder="Repeat your password..."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button type="submit">Register</Button>
            </ButtonContainer>
          </form>
          <LinkText href="/">Already have an account?</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Register;
