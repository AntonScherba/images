import React, { useContext } from "react";
import { Context } from "../../context";

const ImageCard = ({ image }) => {
  const dispatch = useContext(Context);
  const { imageUrl, tag, title } = image;
  return (
    <div>
      <img
        onClick={() => dispatch({ type: "SET_TAG_NAME", payload: tag })}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};

export default ImageCard;
