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

    select {
      width: 100%;
      height: 30px;
      padding: 0 30px;
      margin-top: 30px;
      border: 1px solid #cbcbcb;
      color: #3b3b3b;
      font-size: 16px;
      border-radius: 5px;
      background: #fff;
      transition: 0.3s ease-out;
      cursor: pointer;
      outline: none;

      &:hover {
        background: #cbcbcb;
      }

      &:focus {
        background: #fff;
      }

      option {
        color: #3b3b3b;
        background: #fff;
      }
    }

    button {
      display: block;
      width: 100%;
      height: 30px;
      border: 0;
      background: #3aa9e0;
      color: #fff;
      margin-top: 30px;
      border-radius: 5px;
      letter-spacing: 0.8px;
      cursor: pointer;

      &:hover {
        background: #2998d0;
      }
    }
  }
`;
