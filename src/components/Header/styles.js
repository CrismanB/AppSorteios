import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  align-items: center;
  background: #202d36;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin: 20px 0;
  list-style: none;
`;

export const ListItems = styled.li`
  padding: 10px;
`;
export const Links = styled.button`
  text-decoration: none;
  background: none;
  overflow: hidden;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  transition: color 0.2s;
  outline: none;
  &:hover {
    color: #4141a3;
  }
`;
