import styled from 'styled-components';

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
  .error {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
      margin-bottom: 6px;
    }
    p {
      font-style: italic;
    }
    a {
      background-color: rgba(255, 255, 255, 0.6);
      padding: 4px 16px;
      margin-top: 14px;
      border-radius: 4px;
      color: #000;
      transition: background-color 0.5s;
      &:hover {
        background-color: #fff;
        transform: scale(1.05);
      }
    }
  }
`;
