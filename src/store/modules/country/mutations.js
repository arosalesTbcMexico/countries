export default {
    GET_COUNTRIES(state, payload) {
        state.countries = payload;
    },
    GET_COUNTRY(state, payload) {
        state.country = payload;
    }
}