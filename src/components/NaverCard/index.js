import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function NaverCard(props) {
  return (
    <>
      <p>(Nome)</p>
      <p>(Função)</p>
      <p>
        <DeleteIcon />
        <EditIcon />
      </p>
    </>
  );
}

export default NaverCard;
