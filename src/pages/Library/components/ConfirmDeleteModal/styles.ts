import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  max-width: 420px;
  margin: 15% auto;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background: #e0e0e0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  background: #ff6b6b;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
