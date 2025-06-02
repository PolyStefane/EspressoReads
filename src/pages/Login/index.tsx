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
import { toast } from "sonner";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const toastId = toast.loading("Connecting to server...");

    try {
      const response = await login({ email, password });
      const username = response?.username;
      const userId = response?.id;

      if (userId) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username || "User");

        toast.success("Login successful!", { id: toastId });
        navigate("/home");
      } else {
        toast.error("Could not process login.", { id: toastId });
      }
    } catch (error: any) {
      console.error("Login failed:", error);

      const message =
        error?.status === 401
          ? "Invalid email or password."
          : "Failed to log in.";

      toast.error(message, { id: toastId });
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Enter"}
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
