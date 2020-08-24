import React from "react";
import Header from "../components/Header/index";
import axios from "axios";
import NaverCard from "../components/NaverCard";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      naversList: [],
    };
  }

  render() {
    return (
      <>
        <Header></Header>
        <div>
          <h1>Navers</h1>
          <NaverCard></NaverCard>
        </div>
      </>
    );
  }
}

export default HomePage;
