export const initialState = {
  inputTagName: "",
  images: [],

  isLoad: false,
  isGroup: false,

  isEmptyInput: true,
  isDelay: false,
  isCompositeTag: false,
};

export default function (state, action) {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_TAG_NAME":
      return { ...state, inputTagName: action.payload };
    case "ADD_IMAGE":
      return { ...state, images: state.images.concat(action.payload) };
    case "IS_LOAD_TOGGLE":
      return { ...state, isLoad: !state.isLoad };
    case "IS_GROUP_TOGGLE":
      return { ...state, isGroup: !state.isGroup };
    case "CHECK_EMPTY_INPUT":
      if (state.inputTagName.length === 0) {
        return { ...state, isEmptyInput: true };
      } else {
        return {
          ...state,
          isEmptyInput: false,
        };
      }
    case "CHECK_COMPOSITE_TAG":
      if (state.inputTagName.includes(",") && state.inputTagName.length > 1) {
        return { ...state, isCompositeTag: true };
      } else {
        return {
          ...state,
          isCompositeTag: false,
        };
      }
    case "CHECK_DELAY":
      if (state.inputTagName.toLowerCase().trim() === "delay") {
        return { ...state, isDelay: true };
      } else {
        return {
          ...state,
          isDelay: false,
        };
      }
    default:
      return state;
  }
}
