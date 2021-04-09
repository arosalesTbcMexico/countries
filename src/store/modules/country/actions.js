import services from './../../../services'

export default {
    async getCountries({commit}) {
        try {
            let response = await services.getCountries();
            commit('GET_COUNTRIES', response.data);
        } catch (error) {
            console.log(error);
        }
    },
    
    async getCountry({commit}, payload) {
        try {
            let response = await services.getCountry(payload);
            commit('GET_COUNTRY', response.data);
        } catch (error) {
            console.log(error);
        }
    }
}