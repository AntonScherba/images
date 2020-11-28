import React, { useReducer } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import ImageGroups from "./components/ImageGroups/ImageGroups";
import GroupButton from "./components/GroupButton/GroupButton";
import ResetButton from "./components/ResetButton/ResetButton";
import { Context } from "./context";
import { deepCopyArray } from "./functions";
import reducer, { initialState } from "./reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    inputTagName,
    isLoad,
    isGroup,
    images,
    imageGroups,
    isEmptyInput,
    isCompositeTag,
    isDelay,
  } = state;

  console.log(state);
  const renderImageGroups = () => {
    const imagesCopy = deepCopyArray(images);

    const imageGroups = imagesCopy.reduce((acc, image) => {
      let tag = image.tag.toLowerCase().replace(/\s+/g, "");

      if (!acc[tag]) {
        acc[tag] = [];
      }

      acc[tag].push(image);
      return acc;
    }, {});

    dispatch({ type: "SET_IMAGE_GROUPS", payload: imageGroups });
    dispatch({ type: "IS_GROUP_TOGGLE" });
  };

  return (
    <Context.Provider value={dispatch}>
      <div className="control-bar">
        <SearchBar
          tagName={inputTagName}
          isLoad={isLoad}
          isEmptyInput={isEmptyInput}
          isCompositeTag={isCompositeTag}
          isDelay={isDelay}
        />
        <ResetButton />
        <GroupButton onClick={renderImageGroups} isGroup={isGroup} />
      </div>
      {isGroup ? (
        <ImageGroups imageGroups={imageGroups} />
      ) : (
        <ImageList images={images} />
      )}
    </Context.Provider>
  );
}

export default App;
