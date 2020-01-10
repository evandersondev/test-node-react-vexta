import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #fc4400;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px 0 rgba(141, 68, 0, 0.4);

  a {
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      font-size: 12px;

      &:hover {
        color: #bcbcbc;
      }
    }
  }
`;
