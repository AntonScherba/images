import React from "react";

const GroupButton = ({ isGroup, onClick }) => {
  return (
    <div>
      <button className="btn" style={{ background: "blue" }} onClick={onClick}>
        {isGroup ? "Разгруппировать" : "Группировать"}
      </button>
    </div>
  );
};

export default GroupButton;
