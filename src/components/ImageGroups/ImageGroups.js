import React from "react";
import ImageList from "../ImageList/ImageList";

const ImageGroups = ({ imageGroups }) => {
  const imageTags = Object.keys(imageGroups);

  const images = imageTags.map((key, i) => {
    return (
      <div key={i}>
        <p>{key}</p>
        <ImageList images={imageGroups[key]} />
      </div>
    );
  });

  return images;
};

export default ImageGroups;
