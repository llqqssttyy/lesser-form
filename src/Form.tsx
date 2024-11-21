import React from 'react';

interface FormProps<T> {
  children: React.ReactNode;
  onSubmit?: (values: T) => void;
  defaultAction?: boolean;
}

export default function Form<T>({
  children,
  onSubmit,
  defaultAction = false,
}: FormProps<T>) {
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

    onSubmit?.(values as T);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
