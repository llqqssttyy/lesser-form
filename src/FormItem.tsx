import React, { ChangeEvent, ComponentProps, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Checkbox, Input } from './components/inputs';
import { Textarea } from './components/inputs/Textarea';
import { useFormContext } from './formContext';

type InputElement = ReactElement<ComponentProps<typeof Input>>;
type TextareaElement = ReactElement<ComponentProps<typeof Textarea>>;
type CheckboxElement = ReactElement<ComponentProps<typeof Checkbox>>;

const isInputElement = (element: unknown): element is InputElement => {
  return React.isValidElement(element) && (element.type === Input || element.type === 'input');
};

const isTextareaElement = (element: unknown): element is TextareaElement => {
  return React.isValidElement(element) && (element.type === Textarea || element.type === 'textarea');
};

const isCheckboxElement = (element: unknown): element is CheckboxElement => {
  return (
    React.isValidElement(element) &&
    (element.type === Checkbox || (element.type === 'input' && (element.props as any).type === 'checkbox'))
  );
};

interface FormItemProps {
  value: string;
  name: string;
  children: InputElement | TextareaElement | CheckboxElement | ReactNode;
}

export default function FormItem({ children, ...props }: FormItemProps) {
  const { registerField, updateField } = useFormContext();
  const [_value, _setValue] = useState(props.value ?? '');

  const handleChange = (newValue: string) => _setValue(newValue);

  // TODO: FormItem이 마운트 + _value가 변경되면 formState 업데이트
  useEffect(() => {
    registerField(props.name, _value);
  }, []);

  useEffect(() => {
    updateField(props.name, _value);
  }, [_value]);

  const enhancedChildren = React.Children.map(children, (child) => {
    if (isInputElement(child)) {
      return React.cloneElement(child, {
        name: props.name,
        value: _value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value);
          if (child.props.onChange) {
            child.props.onChange(e);
          }
        },
      });
    }

    if (isTextareaElement(child)) {
      return React.cloneElement(child, {
        name: props.name,
        value: _value,
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
          handleChange(e.target.value);
          if (child.props.onChange) {
            child.props.onChange(e);
          }
        },
      });
    }

    if (isCheckboxElement(child)) {
      return React.cloneElement(child, {
        name: props.name,
        value: _value,
        // TODO: formState에 value가 있으면 checked: true 전달..
        // checked: ,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value);
          if (child.props.onChange) {
            child.props.onChange(e);
          }
        },
      });
    }

    return child;
  });

  return <>{enhancedChildren}</>;
}
