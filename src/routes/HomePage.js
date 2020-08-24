import React, { useEffect } from "react";
import Header from "../components/Header/index";
import axios from "axios";
import NaverCard from "../components/NaverCard";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <Header></Header>
      <div>
        <h1>Navers</h1>
        <NaverCard></NaverCard>
      </div>
    </>
  );
};

export default HomePage;
