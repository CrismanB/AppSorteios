import React from "react";
import { Container } from "./styles";
import { MdFavorite } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <Container>
      <h4>
        Desenvolvido com{" "}
        <div>
          <MdFavorite color="#d13864" size={20} />
        </div>{" "}
        por - Crisman Bernardo dos Santos
      </h4>
      <div>
        <a href="https://github.com/CrismanB">
          <span>
            <FaGithub size={25} color="#dedede" />
          </span>
        </a>
        <a href="https://br.linkedin.com/in/crisman-bernardo-94b67aa0">
          <span>
            <FaLinkedin size={25} color="#dedede" />
          </span>
        </a>
        <a href="https://www.instagram.com/kimalovisc/">
          <span>
            <FaInstagram size={25} color="#dedede" />
          </span>
        </a>
      </div>
    </Container>
  );
}
