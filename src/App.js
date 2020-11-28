import React, { useReducer } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import ImageGroups from "./components/ImageGroups/ImageGroups";
import GroupButton from "./components/GroupButton/GroupButton";
import ResetButton from "./components/ResetButton/ResetButton";
import { Context } from "./context";

import reducer, { initialState } from "./reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    inputTagName,
    isLoad,
    isGroup,
    images,
    isEmptyInput,
    isCompositeTag,
    isDelay,
  } = state;

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
        <GroupButton isGroup={isGroup} />
      </div>
      {isGroup ? (
        <ImageGroups images={images} />
      ) : (
        <ImageList images={images} />
      )}
    </Context.Provider>
  );
}

export default App;
