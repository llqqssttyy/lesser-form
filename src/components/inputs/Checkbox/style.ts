import styled from '@emotion/styled';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.checked ? '#4caf50' : '#ddd')};
  border: 2px solid ${(props) => (props.checked ? '#4caf50' : '#aaa')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s;

  &::after {
    content: ${(props) => (props.checked ? "'✔'" : "''")};
    color: white;
    font-size: 16px;
  }
`;
