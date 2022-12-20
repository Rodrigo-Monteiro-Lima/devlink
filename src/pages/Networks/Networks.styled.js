import styled from 'styled-components';

export const StyledNetworks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6px 28px 6px;

  h1 {
    color: #fff;
    margin-top: 34px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    label {
      color: #fff;
      font-weight: medium;
      margin-top: 8px;
      margin-bottom: 14px;
    }
    /* 
    section {
      display: flex;
      margin: 14px 0;
      gap: 22px;

      label {
        margin-right: 14px;
      }
    } */

    button {
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      border-radius: 4px;
      background-color: #3366ff;
      border: 0;
      font-size: 18px;
      color: #fff;
      gap: 8px;
    }
  }
`;
