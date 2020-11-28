import React, { useContext } from "react";
import { Context } from "../../context";

const GroupButton = ({ isGroup }) => {
  const dispatch = useContext(Context);
  return (
    <div>
      <button
        className="btn"
        style={{ background: "blue" }}
        onClick={() => dispatch({ type: "IS_GROUP_TOGGLE" })}
      >
        {isGroup ? "Разгруппировать" : "Группировать"}
      </button>
    </div>
  );
};

export default GroupButton;
