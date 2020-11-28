import React, { useContext } from "react";
import { Context } from "../../context";
import { generateRandomString } from "../../functions";

const SearchBar = ({
  tagName,
  isLoad,
  isEmptyInput,
  isCompositeTag,
  isDelay,
}) => {
  const dispatch = useContext(Context);

  // Добавте свой API key
  const apiKey = "FGG34DXH0GcZUAI7aGnKpiMamZ30KU7O";

  const getImage = async (tag) => {
    dispatch({ type: "IS_LOAD_TOGGLE" });
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
    let response = await fetch(apiUrl);

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      let image = await response.json();

      if (image.data.length === 0) {
        alert("По тегу ничего не найдено");
      } else {
        const newImage = {
          tag: tag,
          imageUrl: image.data.image_url,
          title: image.data.title,
          id: image.data.id,
        };
        dispatch({ type: "ADD_IMAGE", payload: newImage });
      }
    } else {
      alert("Произошла http ошибка");
    }
    dispatch({ type: "IS_LOAD_TOGGLE" });
  };

  const randomRequst = () => {
    const randomString = generateRandomString(10);
    getImage(randomString);
  };

  const handleChangeTagName = (e) => {
    let inputField = e.target.value.replace(/[^a-z,\s]/gi, "");
    dispatch({ type: "SET_TAG_NAME", payload: inputField });
    dispatch({ type: "CHECK_EMPTY_INPUT" });
    dispatch({ type: "CHECK_COMPOSITE_TAG" });
    dispatch({ type: "CHECK_DELAY" });
  };

  const handleSubmitTag = (e) => {
    e.preventDefault();

    if (isEmptyInput) {
      alert(`заполните поле 'тег'`);
    } else if (isDelay) {
      setInterval(randomRequst, 5000);
    } else if (isCompositeTag) {
      const tags = tagName.replace(/\s+/g, "").split(",");

      tags.map((tag) => {
        return getImage(tag);
      });
    } else {
      getImage(tagName);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitTag}>
      <input
        type="text"
        value={tagName}
        placeholder="введите тег"
        onChange={handleChangeTagName}
      />
      <button
        className="btn"
        disabled={isLoad ? true : false}
        title="Загрузить"
        style={{ background: "green" }}
      >
        {isLoad ? "Загрузка..." : "Загрузить"}
      </button>
    </form>
  );
};

export default SearchBar;
