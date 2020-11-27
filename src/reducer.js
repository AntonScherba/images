export const initialState = {
  inputTagName: "",
  images: [],
  imageGroups: {},
  isLoad: false,
  isGroup: false,
};

export default function (state, action) {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_TAG_NAME":
      return { ...state, inputTagName: action.payload };
    case "ADD_IMAGE":
      return { ...state, images: state.images.concat(action.payload) };
    case "SET_IMAGE_GROUPS":
      return { ...state, imageGroups: action.payload };
    case "IS_LOAD_TOGGLE":
      return { ...state, isLoad: !state.isLoad };
    case "IS_GROUP_TOGGLE":
      return { ...state, isGroup: !state.isGroup };
    default:
      return state;
  }
}
