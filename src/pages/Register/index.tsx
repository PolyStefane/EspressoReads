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
import { toast } from "sonner";

const Register: React.FC = () => {
  // Hooks
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const userPhoto = "https://imagem.com/avatar.jpg";

  const handleRegister = async () => {
    if (isLoading) return;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Connecting to server...");

    try {
      await register({ userPhoto, username, email, password });
      toast.success("Account created successfully!", { id: toastId });
      navigate("/");
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast.error(error.message || "An unexpected error occurred.", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </ButtonContainer>
          </form>
          <LinkText href="/">Already have an account?</LinkText>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
};

export default Register;
