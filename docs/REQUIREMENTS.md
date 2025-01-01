## 왜 이걸 만들어야 하는가?

- Form을 제작할 때 느끼는 불편함.. 매번 보일러플레이트 코드가 생성되는 게 싫었음.
- react-hook-form도 사용해봤지만 uncontrolled 방식으로 관리해야 하다 보니 watch를 써야 하는 등 복잡한 기능일 수록 쳐야 하는 코드가 많아짐.

### 미션

- 1. controlled 방식을 사용하면서도 렌더링 효율성을 높이기(변경되는 Input만 렌더링시키기)
- 2. validation, focus 이동 등 선언적으로 form의 동작을 정의할 수 있어야 한다.
- 3. form의 요소가 동적으로 추가될 수 있어야 하며, 이때도 선언적으로 추가할 수 있어야 한다.

## step by step

### Iteration 1

최소 요구사항

#### input 값 상태 관리

- [x] 한 개의 input에 값을 입력하면 value가 바뀌어야 한다.
- [x] 실제로 변경하고 있는 input만 재렌더링되어야 한다.
  - [x] 복잡한 구조 필요 없이, state를 따로 쪼개면 되는 거 아닌가?

#### submit 동작

- [x] ~~formData로 데이터를 읽어 온다.~~

#### FormItem

- [ ] onChange를 사용자가 직접 전달 할 수 있어야 한다.
- [x] FormContext에 있는 formState ref를 업데이트 시켜야 한다.
- [x] text value를 업데이트 해야 한다.
- [ ] checked를 업데이트 해야 한다.

#### formField

Checkbox, Radio 그룹을 처리할 FormField 컴포넌트가 필요하다.

- [ ] FormField 컴포넌트는 아래 API를 참고한다(shadcn/ui)
- [ ] checkbox는 onChange를 바깥에서 받아야 한다?

```jsx
{
  items.map((item) => (
    <FormField
      key={item.id}
      control={form.control}
      name="items"
      render={({ field }) => {
        return (
          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value?.includes(item.id)}
                onCheckedChange={(checked) => {
                  return checked
                    ? field.onChange([...field.value, item.id])
                    : field.onChange(field.value?.filter((value) => value !== item.id));
                }}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
          </FormItem>
        );
      }}
    />
  ));
}
```

## 더 발전시키기 위한 고민

- [ ] 실시간 상태 검사를 지원해야 한다면? error message, validation, isDirty 등
- [ ] Checkbox와 성격이 동일한 버튼을 만든다면? 렌더링이 다르게 되어야 하지 않을까? render props로 Checkbox에 다양성 부여하기
- [ ] Label이 들어가는 경우?
