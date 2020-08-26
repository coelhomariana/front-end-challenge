import React, { useState, useEffect } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";

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

  return (
    <>
      <Header></Header>
      <div>
        <h1>Navers</h1>
      </div>
    </>
  );
};

export default HomePage;
