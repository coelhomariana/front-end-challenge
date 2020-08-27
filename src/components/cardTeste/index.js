import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteNaver(props) {
  const saveNaverId = () => {
    window.localStorage.setItem("naverId", props.naverId);
  };

  return (
    <div>
      <DeleteIcon onClick={saveNaverId}>Deletar</DeleteIcon>
    </div>
  );
}

export default DeleteNaver;
