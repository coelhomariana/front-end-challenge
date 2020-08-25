import React, { useState, useEffect } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";

const baseURL = "https://navedex-api.herokuapp.com/v1";

const NaverCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NaverCard = styled.div`
  width: 280px;
  height: 376px;
  border: 1px solid black;
`;

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

  return (
    <>
      <Header></Header>
      <div>
        <h1>Navers</h1>
        <div>
          {naversList.map((naver) => {
            return (
              <NaverCardContainer>
                <NaverCard>
                  {naver.name} {naver.job_role}
                </NaverCard>
              </NaverCardContainer>
            );
          })}
        </div>
        <button onClick={getNaversList}>Botão teste pro GET</button>
      </div>
    </>
  );
};

export default HomePage;
