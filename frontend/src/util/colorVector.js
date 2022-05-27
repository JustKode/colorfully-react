function colorValue(color) {
  const colorToNumList = color.replace('rgb(', '').replaceAll(',', '').replace(')', '').split(' ');
  return colorToNumList.map((colorString) => parseInt(colorString, 10));
}

function innerProduct(color1, color2, intensity1, intensity2) {
  const innerProductList = [0, 1, 2].map(
    (idx) => (color1[idx] * intensity1 + color2[idx] * intensity2) / (intensity1 + intensity2),
  );
  return `rgb(${innerProductList[0]}, ${innerProductList[1]}, ${innerProductList[2]})`;
}

function colorVector(color1, color2, intensity1, intensity2) {
  return {
    mainBackGroup: `${innerProduct(
      colorValue(color1.mainBackGroup),
      colorValue(color2.mainBackGroup),
      intensity1,
      intensity2,
    )}`,
    mainGroup: `${innerProduct(colorValue(color1.mainGroup), colorValue(color2.mainGroup), intensity1, intensity2)}`,
    subGroup: `${innerProduct(colorValue(color1.subGroup), colorValue(color2.subGroup), intensity1, intensity2)}`,
    pointGroup: `${innerProduct(colorValue(color1.pointGroup), colorValue(color2.pointGroup), intensity1, intensity2)}`,
  };
}

export default colorVector;
