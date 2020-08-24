import React, { useState } from "react";
import Card from "../components/Card/index";
import { Button } from "../styles/styles";
import Header from "../components/Header/index";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";

const baseURL = "https://navedex-api.herokuapp.com/v1";

const LoginPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseURL}/users/login`, body);
      window.localStorage.setItem("token", response.data.token);
      history.push("/home");
    } catch (e) {
      alert("Dados incorretos, tente novamente.");
    }
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
          type="password"
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
