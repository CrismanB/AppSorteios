import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  height: 95px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    color: #dedede;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    letter-spacing: 2.5px;
    div {
      padding: 10px;
    }
  }

  div {
    display: flex;
    justify-content: center;
  }

  span {
    color: #dedede;
    padding: 8px;
  }
`;
