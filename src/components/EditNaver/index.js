import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { FlexDiv } from "../../styles/styles";
import { useHistory } from "react-router-dom";

const EditNaver = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/editnaver`;
    history.push(path);
  };

  return (
    <FlexDiv>
      <EditIcon onClick={routeChange}></EditIcon>
    </FlexDiv>
  );
};

export default EditNaver;
