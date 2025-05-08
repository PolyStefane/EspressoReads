import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #d4eac8;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background-color: #d4eac8;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 32px;
    color: #6a9c89;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
  }
`;

export const FormWrapper = styled.div`
  width: 400px;
  background-color: #eef6e9;
  border-radius: 20px;
  padding: 40px;
  margin: auto;
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
  width: 60px;
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
