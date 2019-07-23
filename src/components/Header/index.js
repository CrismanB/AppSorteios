import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, List, ListItems, Links } from "./styles";

const Header = () => (
  <Fragment>
    <Nav>
      <List>
        <ListItems>
          <Link to="/">
            <Links>Home</Links>
          </Link>
        </ListItems>
        <ListItems>
          <Link to="/megasena">
            <Links>Mega-Sena</Links>
          </Link>
        </ListItems>
        <ListItems>
          <Link to="/quina">
            <Links>Quina</Links>
          </Link>
        </ListItems>
        <ListItems>
          <Link to="/lotofacil">
            <Links>Lotofácil</Links>
          </Link>
        </ListItems>
      </List>
    </Nav>
  </Fragment>
);

export default Header;
