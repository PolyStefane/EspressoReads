import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #c5ddbe;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftTextWrapper = styled.div`
  margin-left: 22rem;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #7bb286;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 1440px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 2.8rem;
  color: black;
  text-align: center;

  @media (max-width: 1440px) {
    font-size: 2rem;
  }
`;

export const ImageTopLeft = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30rem;
`;

export const ImageBottomLeft = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 30rem;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const FormWrapper = styled.div`
  width: 35rem;
  background-color: #fffdf0;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.8rem;
    color: black;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 20px;
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 1.4rem;
  width: 8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 2px solid #d7e5d2;
  border-radius: 0.7rem;
  background-color: #d7e5d2;
  font-size: 1.1rem;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  outline: none;

  &::placeholder {
    color: #6e9a77;
  }

  &:focus {
    border-color: #7bb286;
    background-color: #eaf3e5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 25%;
  padding: 0.5rem;
  background-color: #7bb286;
  color: #fffdf0;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    background-color: #5e9b73;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #dfe6e9;
    color: #636e72;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const LinkText = styled.a`
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #7bb286;
  font-size: 1.1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
