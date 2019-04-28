export function categorieBgStyles(categorie) {
  return {
    backgroundImage: `url(${categorie.backgroundUrl})`,
    backgroundSize: "cover",
    overflow: "hidden"
  }
}
