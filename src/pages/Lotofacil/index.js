import React, { Component } from "react";
import {
  Container,
  Form,
  Title,
  Button,
  List,
  Result,
  Message
} from "./styles";
import randomNumbers from "./../../util/randomNumbers";
export default class Lotofacil extends Component {
  state = {
    numbers: [],
    random: false
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = randomNumbers(25, 15);
    this.setState({ numbers: [...data], random: true });
  };

  render() {
    const { numbers, random } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Lotofacil</Title>
          <Button type="submit" onClick={e => console.log("Botão Clicado")}>
            Sortear Números
          </Button>
        </Form>
        <List>
          {numbers.map(num => (
            <Result key={num}>{num}</Result>
          ))}
        </List>
        {random ? <Message>Boa sorte!</Message> : null}
      </Container>
    );
  }
}
