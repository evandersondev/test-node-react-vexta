import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 350px;
    margin: 60px auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(103, 103, 178, 0.1);

    h4 {
      font-size: 20px;
      text-align: center;
      font-weight: 500;
      display: block;
      line-height: 30px;

      strong {
        letter-spacing: 2px;
        font-size: 24px;
      }
    }

    input,
    .btn-group {
      margin-top: 30px;
    }

    input {
      width: 100%;
      height: 30px;
      padding: 0 30px;
      border: 1px solid #cbcbcb;
      color: #3b3b3b;
      font-size: 16px;
      border-radius: 5px;
    }

    .btn-group {
      width: 100%;
      height: 30px;
      display: flex;
      margin-bottom: 30px;
      font-size: 14px;

      a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;
        color: #3aa9e0;
        border: 1px solid #3aa9e0;
        margin-right: 15px;
        border-radius: 5px;
        line-height: 30px;

        &:hover {
          color: #2998d0;
          border: 1px solid #2998d0;
          font-weight: 600;
        }
      }

      button {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
        background: #3aa9e0;
        color: #fff;
        margin-left: 15px;
        border-radius: 5px;
        letter-spacing: 0.8px;
        cursor: pointer;

        &:hover {
          background: #2998d0;
        }
      }
    }
  }
`;
