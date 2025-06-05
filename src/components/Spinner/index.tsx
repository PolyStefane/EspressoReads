import React from "react";
import { SpinnerCircle, SpinnerContainer, SpinnerText } from "./styles";

export const Spinner: React.FC<{ text?: string }> = ({ text }) => (
  <SpinnerContainer>
    <SpinnerCircle />
    {text && <SpinnerText>{text}</SpinnerText>}
  </SpinnerContainer>
);
