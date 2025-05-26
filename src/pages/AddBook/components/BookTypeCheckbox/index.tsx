// pages/AddBook/components/BookTypeCheckbox.tsx
import React from "react";
import { CheckboxWrapper } from "../../styles";

type Props = {
  digital: boolean;
  physical: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BookTypeCheckbox: React.FC<Props> = ({
  digital,
  physical,
  onChange,
}) => {
  return (
    <CheckboxWrapper>
      <label>
        <input
          type="checkbox"
          name="physical"
          checked={physical}
          onChange={onChange}
        />
        Physical
      </label>
      <label>
        <input
          type="checkbox"
          name="digital"
          checked={digital}
          onChange={onChange}
        />
        Digital
      </label>
    </CheckboxWrapper>
  );
};
