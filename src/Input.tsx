import styled from '@emotion/styled';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function DefaultInput(
  { label, onChange, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput ref={ref} onChange={onChange} {...props} />
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0px 18px;
  border-radius: 8px;
  border: none;
  outline: none;

  color: #333d4b;
  background-color: #ffffff;

  font-size: 15px;
  line-height: 20px;
  letter-spacing: normal;
  text-align: start;

  transition: background-color 0.2s ease, color 0.1s ease, box-shadow 0.2s ease;

  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  &:hover {
    box-shadow: inset 0 0 0 2px #90c2ff;
  }
  &:focus,
  &:active {
    box-shadow: inset 0 0 0 2px #3182f6;
  }
  &::placeholder {
    color: #8b95a1;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  padding: 5px 0;
  color: #4e5968;
`;
