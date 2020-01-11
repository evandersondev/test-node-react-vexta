import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 50px;
    height: 50px;

    border: 8px solid #f3f3f3;
    border-top: 8px solid #3aa9e0;
    border-radius: 50%;
    animation: loader 0.5s linear infinite;
    z-index: 999;

    @keyframes loader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
