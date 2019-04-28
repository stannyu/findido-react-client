export function categorieBgStyles(categorie) {
  return {
    backgroundImage: `url(${categorie.backgroundUrl})`,
    backgroundSize: "cover",
    overflow: "hidden"
  }
}

export function heatToUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}
