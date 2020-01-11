import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(103, 103, 178, 0.1);
  position: relative;

  @media (max-width: 420px) {
    width: 100%;
  }

  h1 {
    line-height: 180px;
    font-weight: 500;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(103, 103, 178, 0.1);

  @media (max-width: 600px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px 30px;
  }

  h2 {
    font-weight: 500;

    @media (max-width: 600px) {
      margin-bottom: 30px;
    }
  }

  .filter {
    height: 30px;

    input {
      width: 200px;
      height: 100%;
      padding: 0 15px;
      border: 1px solid #cbcbcb;
      border-radius: 5px;
    }

    select {
      border: 0;
      height: 100%;
      padding: 0 10px;
      border-radius: 5px;
      margin-left: 5px;
      background: #f0f1fa;
      color: #3aa9e0;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s ease-out;

      &:hover {
        background: #e0e1ea;
      }

      option {
        display: block;
        padding: 15px;
        background-color: #fff;
      }
    }
  }
`;

export const NavItem = styled.div`
  width: 100%;

  & + div {
    margin-top: 2px;
  }

  ul {
    font-weight: 500;
    background: #f0f1fa;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    transition: 0.3s ease-out;

    @media (max-width: 420px) {
      padding: 15px 10px;
    }

    li {
      &:nth-child(4) {
        width: 60px;
      }
    }
  }
`;
