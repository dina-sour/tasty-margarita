const typeColorPairs = {
    "grass":"#78C850",
    "fire":"#F08030",
    "water":"#6890F0",
    "bug":"#A8B820",
    "normal":"#A8A878",
    "poison":"#A040A0",
    "electric":"#F8D030",
    "ground":"#E0C068",
    "rock":"#B8A038",
    "psychic":"#F85888",
    "fighting":"#C03028",
    "dragon":"#7038F8",
    "fairy":"#EE99AC",
    "ice":"#98D8D8",
    "ghpst":"#705898",
    "flying":"#A890F0",
    "dark":"#705848",
    "default":"#68A090"
}
export const generateColorForType = (type) => {
    let color = typeColorPairs[type.toLowerCase()];
    if (!color) {
        color = typeColorPairs["default"];
    }
    return color;
}