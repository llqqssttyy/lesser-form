import { CheckboxInput } from './CheckboxInput';
import Form from './Form';
import FormItem from './FormItem';
import { Input } from './Input';
import { Textarea } from './TextArea';

interface FormValues {
  input: string;
  textarea: string;
  checkbox: boolean;
  fieldset: string[];
}

function App() {
  const handleSubmit = (values: FormValues) => {
    window.alert(JSON.stringify(values));
  };

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
      <FormItem name="input" initialValue={''}>
        <Input />
      </FormItem>

      <FormItem name="textarea" initialValue={''}>
        <Textarea />
      </FormItem>

      <FormItem name="checkbox" initialValue={''}>
        <CheckboxInput />
      </FormItem>

      <FormItem name="checkboxes" initialValue={['']}>
        <CheckboxInput value={'hi'} />
        <CheckboxInput value={'this'} />
        <CheckboxInput value={'is'} />
      </FormItem>
    </Form>
  );
}

export default App;
