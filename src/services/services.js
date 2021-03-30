import marvelApi from './marvel-api'

export default {
    getCharacters() {
        return marvelApi.get('characters');
    },
    getComics() {
        return marvelApi.get('comics');
    }
}