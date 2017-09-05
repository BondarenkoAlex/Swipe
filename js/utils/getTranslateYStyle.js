const getTranslateYStyle = function getTranslateYStyle(distance) {
  return (
    `-webkit-transform:translateY(${distance}px);` +
    `-ms-transform:translateY(${distance}px);` +
    `transform:translateY(${distance}px);`
  );
};

export default getTranslateYStyle;