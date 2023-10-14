const elementColors = {
    BUG: '#327540',
    ELECTRIC: '#FFD970',
    FLYING: '#8477fd',
    GROUND: '#f1be71',
    POISON: '#d777fd',
    STEEL: '#89879b',
    DARK: '#351c16',
    FIGHTING: '#FA005A',
    GHOST: '#FA005A',
    ICE: '#FA005A',
    PSYCHIC: '#FA005A',
    WATER: '#77BDFD',
    DRAGON: '#FA005A',
    FIRE: '#FB6C6C',
    GRASS: '#46D1B1',
    NORMAL: '#FA005A',
    ROCK: '#FA005A',
    FAIRY: '#FA005A',
};

function formatPkmId(id) {
    const zerosToAdd = Math.max(0, 3 - id.toString().length);
    return '#' + '0'.repeat(zerosToAdd) + id;
}

export { elementColors, formatPkmId }