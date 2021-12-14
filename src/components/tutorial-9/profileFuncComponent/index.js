import React from "react";

export const ProfileFunc = ({ name, registredAt }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "lightGray",
        borderRadius: "10px",
        fontSize: "2rem",
      }}
    >
      <p>
        Привет, <b>{name.split(" ")[0]}!</b>
      </p>
      <p>Дата регистрации: {registredAt}</p>
    </div>
  );
};
