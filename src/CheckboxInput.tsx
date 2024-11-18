import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes, useState } from 'react';

type CheckboxInputProps = InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput({ checked, defaultChecked, onChange, ...props }, ref) {
    const [isChecked, setIsChecked] = useState(!!defaultChecked);

    const isControlled = checked !== undefined;

    const currentChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setIsChecked(e.target.checked);
      }
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <CheckboxContainer>
        <HiddenCheckbox
          type="checkbox"
          checked={currentChecked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <StyledCheckbox checked={!!currentChecked} />
      </CheckboxContainer>
    );
  }
);

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.checked ? '#4caf50' : '#ddd')};
  border: 2px solid ${(props) => (props.checked ? '#4caf50' : '#aaa')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s;

  &::after {
    content: ${(props) => (props.checked ? "'✔'" : "''")};
    color: white;
    font-size: 16px;
  }
`;
