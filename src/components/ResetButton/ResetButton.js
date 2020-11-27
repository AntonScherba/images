import React, { useContext } from "react";
import { Context } from "../../context";

const ResetButton = () => {
  const dispatch = useContext(Context);
  return (
    <div>
      <button
        className="btn"
        style={{ background: "red" }}
        onClick={() => dispatch({ type: "RESET" })}
      >
        {"Очистить"}
      </button>
    </div>
  );
};

export default ResetButton;
