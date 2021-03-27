<template>
    <main-layout>
        <div class="row">
            <div class="col-xs-12 col-lg-4 gy-3 gx-5">
                <input v-model="search" type="text" placeholder="Search for a country" class="form-control">
            </div>
            <div class="col-xs-12 col-lg-4 gy-3 px-5">
                <div class="form-floating">
                    <select
                        id="floatingSelect"
                        v-model="region"
                        class="form-select">
                        <option 
                            v-for="r in regions"
                            :key="r"
                            :value="r">{{r}}</option>
                    </select>
                    <label for="floatingSelect">Filter By Region</label>
                </div>
            </div>
        </div>
        <div class="row px-5">
            <div v-for="country in filterCountries"
                :key="country.alpha3Code"
                class="col-xs-12 col-lg-3 gy-4">
                <router-link 
                    :to="{name: 'country-details', params: {id: country.alpha3Code}}"
                    tag="div"
                    class="card country-container border-2">
                    <img :src="country.flag" class="card-img-top country-flag" :alt="country.name"/>
                    <div class="card-body">
                        <h5 class="card-title"><strong>{{country.name}}</strong></h5>
                        <ul class="card-text list-unstyled">
                            <li>
                                <span>Population: </span>
                                <span class="text-secondary">{{helpers.numberFormat(country.population)}}</span>
                            </li>
                            <li>
                                <span>Region: </span>
                                <span class="text-secondary">{{country.region}}</span>
                            </li>
                            <li>
                                <span>Capital: </span>
                                <span class="text-secondary">{{country.capital}}</span>
                            </li>
                        </ul>
                    </div>
                </router-link>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from './../layouts/MainLayout'
    import services from './../services'
    import helpers from './../utils/helpers'
    export default {
        components: {
            MainLayout
        },
        data() {
            return {
                countries: [],
                helpers,
                search: '',
                region: ''
            }
        },
        computed: {
            filterCountries() {
                let result = this.countries;
                if(this.search) {
                    result = result.filter(e => e.name.toLowerCase() == this.search.toLowerCase());
                }
                console.log(this.region);
                if(this.region) {
                    result = result.filter(e => e.region == this.region);
                }
                if(!result.length) {
                    result = this.countries;
                }
                return result;
            },
            regions() {
                let regions = this.countries.map(e => e.region).filter((e, i, s) => s.indexOf(e) === i).sort();
                regions.shift();
                return regions;
            }
        },
        async mounted() {
            try {
                let response = await services.getCountries();
                this.countries = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style scoped>
    .country-flag {
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 100%;
    }
    .country-container {
        width: 100%;
    }
    @media screen and (min-width: 1199.98px) {
        .country-flag {
            width: 280px;
            height: 200px;
            overflow: hidden;
            -o-object-fit: cover;
            object-fit: cover;
        }
    .country-container {
        width: 282px;
    }
    }
</style>