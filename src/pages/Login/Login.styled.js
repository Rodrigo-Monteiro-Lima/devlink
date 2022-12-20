import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    input {
      border: 0;
      height: 36px;
      margin-bottom: 14px;
      border-radius: 4px;
      padding: 0 8px;
      outline: none;
    }

    button {
      height: 36px;
      border-radius: 4px;
      background-color: #3366ff;
      border: 0;
      font-size: 18px;
      color: #fff;
    }
  }
`;