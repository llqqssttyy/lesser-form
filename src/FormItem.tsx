import React, { useState } from 'react';
import { CheckboxInput } from './CheckboxInput';
import { Input } from './Input';
import { Textarea } from './TextArea';
type FormItemProps<T> = {
  initialValue: T;
  children: React.ReactNode;
};

export default function FormItem<T extends string | boolean>({
  children,
  initialValue,
}: FormItemProps<T>) {
  const [_value, _setValue] = useState<T>(initialValue);

  const handleChange = (newValue: T) => _setValue(newValue);

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const { type } = child;

      if (type === Input || type === Textarea) {
        return React.cloneElement(
          child as React.ReactElement<
            React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
          >,
          {
            value: String(_value),
            onChange: (
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChange(e.target.value as T),
          }
        );
      }

      if (type === CheckboxInput) {
        return React.cloneElement(
          child as React.ReactElement<
            React.InputHTMLAttributes<HTMLInputElement>
          >,
          {
            checked: !!_value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.checked as T),
          }
        );
      }
    }
    return child;
  });

  return <>{enhancedChildren}</>;
}
