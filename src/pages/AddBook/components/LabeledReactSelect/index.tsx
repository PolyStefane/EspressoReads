import React from "react";
import Select from "react-select";
import { StyledLabel, Wrapper } from "./styles";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export const LabeledReactSelect: React.FC<Props> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  const selected = options.find((opt) => opt.value === value) || null;

  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Select
        inputId={name}
        name={name}
        value={selected}
        options={options}
        onChange={(opt) => onChange(opt?.value || "")}
        isSearchable={false}
        placeholder="Select..."
        styles={customStyles}
      />
    </Wrapper>
  );
};

const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: "white",
    border: "none",
    borderRadius: "0.3rem",
    padding: "1.6rem 1rem 0.6rem 1rem",
    boxShadow: "#7bb286 0px 0px 7px 0px",
    fontSize: "1rem",
    color: "#1f1f1f",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "auto",
    "&:hover": {
      boxShadow: "#7bb286 0px 0px 10px 1px",
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#1f1f1f",
    fontSize: "1rem",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#1f1f1f",
    fontSize: "1rem",
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: 0,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? "#e3f2e8" : "white",
    color: "#1f1f1f",
    padding: "0.7rem 1rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
    "&:hover": {
      backgroundColor: "#f2fdf7",
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "0.4rem",
    boxShadow: "#7bb286 0px 4px 12px",
    marginTop: "0.3rem",
    zIndex: 20,
  }),

  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#6e9a77",
    padding: "0 8px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
