import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 11px 16px;
  border-radius: 8px;
  resize: none;
  overflow: auto;
  border: none;
  outline: none;

  color: #333d4b;
  background-color: #ffffff;

  font-size: 15px;
  line-height: 20px;
  letter-spacing: normal;
  text-align: start;

  transition: background-color 0.2s ease, color 0.1s ease, box-shadow 0.2s ease;

  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  &:hover {
    box-shadow: inset 0 0 0 2px #90c2ff;
  }
  &:focus,
  &:active {
    box-shadow: inset 0 0 0 2px #3182f6;
  }
  &::placeholder {
    color: #8b95a1;
  }
`;

export const Label = styled.label`
  display: inline-block;
  padding: 5px 0;
  color: #4e5968;
`;
