import React from "react";
import Logo from "../../img/logo.png";
import { Wrapper, WhiteButton } from "../../styles/styles.js";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
    localStorage.clear();
  };
  return (
    <>
      <Wrapper>
        <img src={Logo} alt="website logo" />
        <WhiteButton onClick={routeChange}>Sair</WhiteButton>
      </Wrapper>
    </>
  );
}

export default Header;
