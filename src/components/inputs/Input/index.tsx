import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import * as S from './style';

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function DefaultInput(
  { label, onChange, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <S.Wrapper>
      <S.Input ref={ref} onChange={onChange} {...props} />
    </S.Wrapper>
  );
});
