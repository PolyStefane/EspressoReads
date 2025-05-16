import React from "react";
import { Container, StyledLabel, StyledDateInput } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const LabelInput: React.FC<Props> = ({ label, id, ...rest }) => {
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledDateInput id={id} {...rest} />
    </Container>
  );
};
