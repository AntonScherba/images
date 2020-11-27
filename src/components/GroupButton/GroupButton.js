import React from "react";

const GroupButton = ({ isGroup, onClick }) => {
  return (
    <button onClick={onClick}>
      {isGroup ? "Разгруппировать" : "Группировать"}
    </button>
  );
};

export default GroupButton;
