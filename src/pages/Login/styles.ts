import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #d4eac8;
`;

export const LeftPanel = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LeftTextWrapper = styled.div`
  margin-left: 18rem;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #6a9c89;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: #333;
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
  width: 400px;
  background-color: #eef6e9;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #3b3b3b;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 7rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  background-color: #d4eac8;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6a9c89;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #4f7c6b;
  }
`;

export const LinkText = styled.a`
  display: block;
  margin-top: 16px;
  text-align: center;
  color: #6a9c89;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
