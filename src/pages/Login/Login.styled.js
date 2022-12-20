import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

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
