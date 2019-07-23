import styled from "styled-components";

export const Container = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  padding-top: 15px;
  flex-direction: column;
`;
export const Form = styled.form`
  padding: 18px;
  border-radius: 12px;
  border: solid 3px rgb(125, 156, 135);
  height: 180px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  padding: 20px;
  color: #dedede;
  font-weight: 700;
`;
export const Button = styled.button`
  color: #dedede;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  background: #202d36;
  height: 60px;
  width: 240px;
  border-radius: 15px;
  outline: none;
  transition: background 0.4s;

  &:hover {
    background: #468f61;
    border: solid 1px rgb(65, 66, 65);
  }
`;

export const List = styled.ul`
  padding-top: 5px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  list-style: none;
`;

export const Result = styled.li`
  height: 70px;
  width: 70px;
  font-size: 33px;
  background: rgba(0, 0, 0, 0.2);
  color: #dedede;
  font-weight: 700;
  border: solid 3px rgb(125, 156, 135);
  border-radius: 90px;
  padding: 4px;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.h1`
  padding: 15px;
  color: #dedede;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
`;
