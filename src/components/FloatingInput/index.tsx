// External Libraries
import React, { useState } from "react";

// Styles
import { FloatingInputWrapper, FloatingLabel, StyledInput } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingInput: React.FC<Props> = ({ label, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || !!value;

  return (
    <FloatingInputWrapper>
      <StyledInput
        {...rest}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <FloatingLabel active={isActive}>{label}</FloatingLabel>
    </FloatingInputWrapper>
  );
};
