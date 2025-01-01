import React from 'react';
import { FormProvider } from './formContext';
import BaseForm, { BaseFormProps } from './BaseForm';

interface FormProps extends BaseFormProps {
  children: React.ReactNode;
}

export default function Form({ children, ...props }: FormProps) {
  return (
    <FormProvider>
      <BaseForm handleSubmit={props.handleSubmit}>{children}</BaseForm>
    </FormProvider>
  );
}
