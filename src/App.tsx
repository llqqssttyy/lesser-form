import Form from './Form';
import FormItem from './FormItem';
import { Input } from './components/inputs';
import { Checkbox } from './components/inputs/Checkbox';
import { Textarea } from './components/inputs/Textarea';

interface FormValues {
  input: string;
  textarea: string;
  checkbox: boolean;
  fieldset: string[];
}

function App() {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <FormItem name="input" value={''}>
        <Input />
      </FormItem>

      <FormItem name="textarea" value={''}>
        <Textarea />
      </FormItem>

      <FormItem name="checkbox" value={''}>
        <Checkbox />
      </FormItem>
    </Form>
  );
}

export default App;
