import { ForwardedRef, forwardRef } from 'react';

import { TextareaHTMLAttributes } from 'react';
import * as S from './style';

export const Textarea = forwardRef(function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <S.Wrapper>
      <S.Textarea ref={ref} {...props} />
    </S.Wrapper>
  );
});
