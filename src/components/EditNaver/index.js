import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { FlexDiv } from "../../styles/styles";
import { useHistory } from "react-router-dom";

const EditNaver = (props) => {
  const history = useHistory();
  const { onClick } = props;

  return (
    <FlexDiv>
      <EditIcon onClick={onClick}></EditIcon>
    </FlexDiv>
  );
};

export default EditNaver;
