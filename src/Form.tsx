import React from 'react';

interface FormProps<TFormFields> {
  children: React.ReactNode;
  onSubmit?: (values: TFormFields) => void;
  defaultAction?: boolean;
}

export default function Form<TFormFields extends Record<string, any>>({
  children,
  onSubmit,
  defaultAction = false,
}: FormProps<TFormFields>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!defaultAction) {
      e.preventDefault();
    }

    // 임시 코드
    const formData = new FormData(e.currentTarget);
    const values: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (values[key]) {
        if (Array.isArray(values[key])) {
          return (values[key] = [...values[key], value]);
        }
        return (values[key] = [values[key], value]);
      }
      values[key] = value;
    });

    onSubmit?.(values as TFormFields);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
