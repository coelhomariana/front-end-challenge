import React, { useState } from "react";
import Card from "../components/Card/index";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Header from "../components/Header/index";
import axios from "axios";

const AddNaverPage = () => {
  const [jobRole, setJobRole] = useState("");
  const [admission_date, setAdmission_date] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  };

  const handleAdmission_dateChange = (event) => {
    setAdmission_date(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handlProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const onClickSalvar = async () => {
    const response = await axios
      .put(
        `https://navedex-api.herokuapp.com/v1/navers/`,
        {
          job_role: jobRole,
          admission_date: admission_date,
          birthdate: birthdate,
          project: project,
          name: name,
          url: url,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <Header />
      <Card>
        <TextField
          variant="outlined"
          label={"Nome"}
          placeholder={"Nome"}
          value={name}
          onChange={handleNameChange}
        ></TextField>
        <TextField
          variant="outlined"
          label={"Cargo"}
          placeholder={"Cargo"}
          value={jobRole}
          onChange={handleJobRoleChange}
        ></TextField>
        <TextField
          variant="outlined"
          label={"Idade"}
          placeholder={"Idade"}
          value={birthdate}
          onChange={handleBirthdateChange}
        ></TextField>
        <TextField
          variant="outlined"
          label={"Tempo de empresa"}
          placeholder={"Tempo de empresa"}
          value={admission_date}
          onChange={handleAdmission_dateChange}
        ></TextField>
        <TextField
          variant="outlined"
          label={"Projetos que participou"}
          placeholder={"Projetos que participou"}
          value={project}
          onChange={handlProjectChange}
        ></TextField>
        <TextField
          variant="outlined"
          label={"URL da foto do Naver"}
          placeholder={"URL da foto do Naver"}
          value={url}
          onChange={handleUrlChange}
        ></TextField>
        <Button onClick={onClickSalvar} variant="contained" color="primary">
          Salvar
        </Button>
      </Card>
    </>
  );
};

export default AddNaverPage;
