import React from "react";
import ImageList from "../ImageList/ImageList";

const ImageGroups = ({ images }) => {
  const imageGroups = images.reduce((acc, image) => {
    let tag = image.tag.toLowerCase().replace(/\s+/g, "");

    if (!acc[tag]) {
      acc[tag] = [];
    }

    acc[tag].push(image);
    return acc;
  }, {});

  const imageTags = Object.keys(imageGroups);

  const group = imageTags.map((key, i) => {
    return (
      <div className="image-group" key={i}>
        <p>{key}</p>
        <ImageList images={imageGroups[key]} />
      </div>
    );
  });

  return group;
};

export default ImageGroups;
