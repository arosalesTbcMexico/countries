export default {
    regions: state => {
        let regions = state.countries.map(e => e.region).filter((e, i, s) => s.indexOf(e) === i).sort();
        regions.shift();
        return regions;
    },
    filterCountries: state => (search, region) => {
        let result = state.countries;
        if(search) {
            result = result.filter(e => e.name.toLowerCase() == search.toLowerCase());
        }
        if(region) {
            result = result.filter(e => e.region == region);
        }
        return result;
    }
}