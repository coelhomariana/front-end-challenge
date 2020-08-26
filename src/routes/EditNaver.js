import React, { useState } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import {
  FlexDiv,
  StyledInput,
  InputParagraph,
  InputsWrapper,
  Button,
} from "../styles/styles";

const EditNaverPage = () => {
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
      <FlexDiv>
        <InputsWrapper>
          <InputParagraph>Nome</InputParagraph>
          <StyledInput
            name={"name"}
            placeholder={"Nome"}
            value={name}
            onChange={handleNameChange}
          ></StyledInput>

          <InputParagraph>Idade</InputParagraph>
          <StyledInput
            name={"idade"}
            placeholder={"Idade"}
            value={birthdate}
            onChange={handleBirthdateChange}
          ></StyledInput>

          <InputParagraph>Projetos que participou</InputParagraph>
          <StyledInput
            name={"projetos"}
            placeholder={"Projetos que participou"}
            value={project}
            onChange={handlProjectChange}
          ></StyledInput>
        </InputsWrapper>

        <InputsWrapper>
          <InputParagraph>Cargo</InputParagraph>
          <StyledInput
            name={"cargo"}
            placeholder={"Cargo"}
            value={jobRole}
            onChange={handleJobRoleChange}
          ></StyledInput>

          <InputParagraph>Tempo de empresa</InputParagraph>
          <StyledInput
            name={"tempo-de-empresa"}
            placeholder={"Tempo de empresa"}
            value={admission_date}
            onChange={handleAdmission_dateChange}
          ></StyledInput>

          <InputParagraph>URL da foto do Naver</InputParagraph>
          <StyledInput
            name={"url"}
            placeholder={"URL da foto do Naver"}
            value={url}
            onChange={handleUrlChange}
          ></StyledInput>
          <Button onClick={onClickSalvar}>Salvar</Button>
        </InputsWrapper>
      </FlexDiv>
    </>
  );
};

export default EditNaverPage;
