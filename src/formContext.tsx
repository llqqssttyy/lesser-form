import { createContext, ReactNode, useContext, useRef } from 'react';

interface FormContextProps {
  registerField: (name: string, value: any) => void;
  updateField: (name: string, value: any) => void;
  getValues: () => Record<string, any>;
}

const FormContext = createContext<FormContextProps | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export function FormProvider({ children }: { children: ReactNode }) {
  const fieldsRef = useRef<Record<string, any>>({});

  const registerField = (name: string, value: any) => {
    fieldsRef.current[name] = value;
  };

  const updateField = (name: string, value: any) => {
    fieldsRef.current[name] = value;
  };

  const getValues = () => fieldsRef.current;

  return (
    <FormContext.Provider value={{ registerField, updateField, getValues }}>
      {children}
    </FormContext.Provider>
  );
}
