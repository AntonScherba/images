import React, { useContext } from "react";
import { Context } from "../../context";

const ResetButton = () => {
  const dispatch = useContext(Context);
  return (
    <button onClick={() => dispatch({ type: "RESET" })}>{"Очистить"}</button>
  );
};

export default ResetButton;
