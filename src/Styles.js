import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: green;
`;
export const Form = styled.form`
  padding: 5px;
  border-radius: 20px;
  height: 100px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  padding: 20px;
  color: rgb(37, 37, 37);
  font-size: 45px;
  font-weight: 700;
`;
export const Button = styled.button`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: #191654;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  border-style: none;
  outline: none;

  &:hover {
    background: #43c6ac;
    border: solid 1px rgb(65, 66, 65);
  }
`;
export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Numbers = styled.div`
  height: 90px;
  width: 90px;
  padding: 15px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px rgb(125, 156, 135);
  font-size: 45px;
  font-weight: 700;
  color: rgb(34, 36, 34);
`;
