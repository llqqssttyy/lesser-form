import React from 'react';
import { useFormContext } from './formContext';

export interface BaseFormProps extends Omit<React.ComponentProps<'form'>, 'onSubmit'> {
  children: React.ReactNode;
  handleSubmit: (values: any) => void;
}

export default function BaseForm({ children, ...props }: BaseFormProps) {
  const { getValues } = useFormContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = getValues();
    props.handleSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
}
