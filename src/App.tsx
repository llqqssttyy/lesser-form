import { CheckboxInput } from './CheckboxInput';
import FormItem from './FormItem';
import { Input } from './Input';
import { Textarea } from './TextArea';

function App() {
  return (
    <>
      <FormItem initialValue={''}>
        <Input />
      </FormItem>
      <FormItem initialValue={''}>
        <Textarea />
      </FormItem>
      <FormItem initialValue={false}>
        <CheckboxInput />
      </FormItem>
    </>
  );
}

export default App;
