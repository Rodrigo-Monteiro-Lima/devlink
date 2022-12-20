import styled from 'styled-components';

export const StyledAdmin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6px 28px 6px;

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

    section {
      display: flex;
      margin: 14px 0;
      gap: 22px;

      label {
        margin-right: 14px;
      }
    }

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

  h2 {
    color: #fff;
    margin: 28px 0 14px 0;
  }

  article {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(36, 36, 36, 0.35);
    border-radius: 14px;
    padding: 14px 8px;
    margin-bottom: 14px;

    button {
      border: 1.5px dashed #fff;
      color: #fff;
      background-color: #000;
      padding: 4px 8px;
      border-radius: 2px;
    }
  }

  .preview {
    margin: 0 0 28px 0;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    article {
      border-radius: 0;
    }

    label {
      color: #fff;
      font-weight: medium;
      margin-top: 8px;
      margin-bottom: 14px;
    }
  }

  .animate-pop {
    animation-duration: 0.5s;
    animation-name: animate-pop;
  }

  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }

    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;
