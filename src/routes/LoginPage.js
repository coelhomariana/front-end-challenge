import React, { useState } from "react";
import Card from "../components/Card/index";
import { Button } from "../styles/styles";
import Header from "../components/Header/index";
import styled from "styled-components";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const baseURL = "https://navedex-api.herokuapp.com/v1";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${baseURL}/users/login`, body);
    window.localStorage.setItem("token", response.data.token);
  };

  return (
    <>
      <Card>
        <Header />
        <TextField
          variant="outlined"
          className="classes.textField"
          name={"email"}
          value={email}
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>

        <TextField
          variant="outlined"
          name={"senha"}
          value={password}
          label={"Senha"}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button onClick={handleLogin}>Entrar</Button>
      </Card>
    </>
  );
};

export default LoginPage;
