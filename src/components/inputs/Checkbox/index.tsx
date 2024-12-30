import { forwardRef, InputHTMLAttributes, useState } from 'react';
import * as S from './style';

type CheckboxInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput(props, ref) {
    const [isChecked, setIsChecked] = useState(props.checked);

    const isControlled = !props.defaultChecked;

    const currentChecked = isControlled ? props.checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setIsChecked(e.target.checked);
      }
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <S.Wrapper>
        <S.HiddenCheckbox
          type="checkbox"
          checked={currentChecked}
          defaultChecked={props.defaultChecked}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <S.StyledCheckbox checked={!!currentChecked} />
      </S.Wrapper>
    );
  }
);
