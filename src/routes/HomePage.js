import React, { useState, useEffect } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import NaverCard from "../components/NaverCard";
import { useHistory } from "react-router";
import Typography from "@material-ui/core/Typography";

const baseURL = "https://navedex-api.herokuapp.com/v1";

const HomePage = () => {
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
        <Typography variant="h4">Navers</Typography>
        <div>
          {naversLists.map((naver) => {
            return <div></div>;
          })}
        </div>
        <button onClick={getNaversList}>Botão teste pro GET</button>
      </div>
    </>
  );
};

export default HomePage;
