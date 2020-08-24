import React from "react";
import Card from "../components/Card/index";
import TextField from "../components/TextField";
import { Button } from "../styles/styles";
import Header from "../components/Header/index";

class AddNaverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Card>
          <Header />
          <TextField label={"Nome"} placeholder={"Nome"}></TextField>
          <TextField label={"Cargo"} placeholder={"Cargo"}></TextField>
          <TextField label={"Idade"} placeholder={"Idade"}></TextField>
          <TextField
            label={"Tempo de empresa"}
            placeholder={"Tempo de empresa"}
          ></TextField>
          <TextField
            label={"Projetos que participou"}
            placeholder={"Projetos que participou"}
          ></TextField>
          <TextField
            label={"URL da foto do Naver"}
            placeholder={"URL da foto do Naver"}
          ></TextField>
          <Button>Salvar</Button>
        </Card>
      </>
    );
  }
}

export default AddNaverPage;
