/* The JSON.stringify() method converts a JavaScript value to a JSON string. The JSON.parse() method  parses a JSON string, constructing the JavaScript value or object described by the string. */
export const deepCopyArray = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const generateRandomString = (length) => {
  return Math.random()
    .toString(20)
    .substr(2, length)
    .replace(/[^a-z]/gi, "");
};
