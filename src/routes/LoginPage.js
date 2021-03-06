import React, { useState } from "react";
import BlackBorderCard from "../components/BlackBorderCard";
import Logo from "../img/logo.png";
import { Button } from "../styles/styles";
import axios from "axios";
import { useHistory } from "react-router";
import { StyledInput, InputParagraph } from "../styles/styles";

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
      <BlackBorderCard>
        <div>
          <img src={Logo} alt="website logo" />
        </div>
        <InputParagraph>E-mail</InputParagraph>
        <StyledInput
          label={"E-mail"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></StyledInput>

        <InputParagraph>Senha</InputParagraph>
        <StyledInput
          label={"Senha"}
          name={"senha"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInput>

        <Button onClick={handleLogin}>Entrar</Button>
      </BlackBorderCard>
    </>
  );
};

export default LoginPage;
