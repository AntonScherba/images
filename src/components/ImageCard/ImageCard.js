import React, { useContext } from "react";
import { Context } from "../../context";

const ImageCard = ({ image }) => {
  const dispatch = useContext(Context);
  const { imageUrl, tag, title } = image;
  return (
    <div className="image-card">
      <img
        className="image"
        onClick={() => {
          dispatch({ type: "SET_TAG_NAME", payload: tag });
          dispatch({ type: "CHECK_EMPTY_INPUT" });
        }}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};

export default ImageCard;
