import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #c5ddbe;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
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
`;

export const Subtitle = styled.p`
  font-size: 2.8rem;
  color: black;
  text-align: center;
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
  border: none;
  border-radius: 0.7rem;
  background-color: #c9dcc3;
  font-size: 1rem;

  &::placeholder {
    color: #6e9a77;
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
`;

export const LinkText = styled.a`
  display: block;
  margin-top: 16px;
  text-align: center;
  color: #7bb286;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
