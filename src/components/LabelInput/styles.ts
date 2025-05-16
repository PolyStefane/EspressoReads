import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  font-size: 0.8rem;
  color: #6e9a77;
  pointer-events: none;
`;

export const StyledDateInput = styled.input.attrs({ type: "date" })`
  width: 100%;
  padding: 1.6rem 1rem 0.6rem 1rem;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  font-size: 1rem;
  color: #1f1f1f;
  box-shadow: #7bb286 0px 0px 7px 0px;
  outline: none;

  &:focus {
    box-shadow: #7bb286 0px 0px 10px 1px;
  }
`;
