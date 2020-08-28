import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DeleteNaver(props) {
  const history = useHistory();
  const deleteNaver = () => {
    axios
      .delete(`https://navedex-api.herokuapp.com/v1/navers/${props.naverId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        window.confirm("Deseja mesmo deletar este naver?");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <DeleteIcon onClick={deleteNaver}>Deletar</DeleteIcon>
    </div>
  );
}

export default DeleteNaver;
