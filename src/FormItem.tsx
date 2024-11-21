import React, { useState } from 'react';
import { CheckboxInput } from './CheckboxInput';
import { Input } from './Input';
import { Textarea } from './TextArea';

interface FormItemProps<T> {
  initialValue: T;
  children: React.ReactNode;
  name?: string;
}

export default function FormItem<T>({
  children,
  initialValue,
  name,
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
            name,
            value: String(_value),
            onChange: (
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChange(e.target.value as T),
          }
        );
      }

      if (type === CheckboxInput) {
        const isArray = Array.isArray(_value);
        return React.cloneElement(
          child as React.ReactElement<
            React.InputHTMLAttributes<HTMLInputElement>
          >,
          {
            name,
            checked: isArray
              ? (_value as string[]).includes(String(child.props.value))
              : !!_value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              const isChecked = e.target.checked;

              if (isArray) {
                const updatedValue = isChecked
                  ? [...(_value as string[]), newValue]
                  : (_value as string[]).filter((v) => v !== newValue);
                handleChange(updatedValue as T);
              } else {
                handleChange(isChecked as T);
              }
            },
          }
        );
      }

      console.warn(`Unhandled type: ${type}`);
    }
    return child;
  });

  return <>{enhancedChildren}</>;
}
