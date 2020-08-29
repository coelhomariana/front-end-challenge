import React, { useState, useEffect } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import { useHistory } from "react-router";
import {
  NaverCardName,
  NaverCardJobRole,
  FlexDiv,
  FlexColumn,
  Button,
  Wrapper,
  NaverPhoto,
} from "../styles/styles";
import DeleteNaver from "../components/DeleteNaver";
import EditNaver from "../components/EditNaver";

const baseURL = "https://navedex-api.herokuapp.com/v1";

const HomePage = (props) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);

  const [naversList, setNaversList] = useState([]);

  const getNaversList = () => {
    axios
      .get(`${baseURL}/navers`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setNaversList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNaversList();
  }, [setNaversList]);

  const goToAddNaver = () => {
    let path = `/addnaver`;
    history.push(path);
  };

  const onEditClick = (
    job_role,
    admission_date,
    birthdate,
    name,
    project,
    url,
    id
  ) => {
    localStorage.setItem("nome", name);
    localStorage.setItem("idade", birthdate);
    localStorage.setItem("projetos", project);
    localStorage.setItem("cargo", job_role);
    localStorage.setItem("tempo", admission_date);
    localStorage.setItem("url", url);
    localStorage.setItem("id", id);
    goToEditNaver();
  };

  const goToEditNaver = () => {
    let path = `/editnaver`;
    history.push(path);
  };

  return (
    <>
      <Header></Header>
      <Wrapper>
        <h1>Navers</h1>
        <Button onClick={goToAddNaver}>Adicionar Naver</Button>
      </Wrapper>

      <FlexDiv>
        {naversList.map((naver) => {
          return (
            <FlexColumn>
              <NaverPhoto src={naver.url}></NaverPhoto>
              <NaverCardName>{naver.name}</NaverCardName>
              <NaverCardJobRole>{naver.job_role}</NaverCardJobRole>
              <DeleteNaver naverId={naver.id}></DeleteNaver>
              <EditNaver
                onClick={() => {
                  onEditClick(
                    naver.job_role,
                    naver.admission_date,
                    naver.birthdate,
                    naver.name,
                    naver.project,
                    naver.url,
                    naver.id
                  );
                }}
              ></EditNaver>
            </FlexColumn>
          );
        })}
      </FlexDiv>
    </>
  );
};

export default HomePage;
