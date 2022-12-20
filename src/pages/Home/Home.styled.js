import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 0;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 14px;
    color: #fff;
    font-size: 44px;
    padding-top: 94px;
  }

  span {
    color: #f1f1f1;
    margin-bottom: 18px;
  }

  main {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 90%;
    text-align: center;

    section {
      background-color: #fff;
      width: 100%;
      margin-bottom: 18px;
      padding: 8px 0;
      user-select: none;
      border-radius: 4px;
      transition: transform 0.4s;
      &:hover {
        transform: scale(1.04);
      }
    }

    p {
      font-size: 18px;
      line-height: 150%;
      color: #000;
    }
  }
`;