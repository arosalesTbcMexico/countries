<template>
    <main-layout>
        <div class="row">
            <div class="col gy-3 gx-5">
                <router-link
                    :to="{name: 'countries'}"
                    class="btn bg-white shadow">
                    <i class="bi-arrow-left-short"></i>
                    Back
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-lg-6 g-lg-5">
                <img :src="country.flag" :alt="country.name"/>
            </div>
            <div class="col-xs-12 col-lg-6 g-lg-5">
                <h5><strong>{{country.name}}</strong></h5>
                <div class="row">
                    <div class="col-xs-12 col-lg-6 g-lg-5">
                        <ul class="list-unstyled">
                            <li class="mb-lg-2">
                                <span>Native name: </span>
                                <span class="text-secondary">{{country.nativeName}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Population: </span>
                                <span class="text-secondary">{{helpers.numberFormat(country.population)}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Region: </span>
                                <span class="text-secondary">{{country.region}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Sub Region: </span>
                                <span class="text-secondary">{{country.subregion}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Capital: </span>
                                <span class="text-secondary">{{country.capital}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-lg-6 g-lg-5">
                        <ul class="list-unstyled">
                            <li class="mb-lg-2">
                                <span>Top Level Domain: </span>
                                <span class="text-secondary">{{country.topLevelDomain.join(', ')}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Currencies: </span>
                                <span class="text-secondary">{{country.currencies.map(e => e.name).join(', ')}}</span>
                            </li>
                            <li class="mb-lg-2">
                                <span>Languages: </span>
                                <span class="text-secondary">{{country.languages.map(e => e.name).join(', ')}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        Border Countries:
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div
                                v-for="border in country.borders"
                                :key="border"
                                class="col gy-3 gx-1">
                                    <router-link
                                        :to="{name: 'country-details', params: {id: border}}"
                                        class="btn btn-block bg-white text-decoration-underline shadow"
                                        tag="button">
                                        {{border}}
                                    </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from './../layouts/MainLayout'
    import services from './../services'
    import helpers from './../utils/helpers'
    export default {
        props: {
            id: {
                type: String,
                require: true
            }
        },
        components: {
            MainLayout
        },
        data() {
            return {
                country: {
                    topLevelDomain: [],
                    currencies: [],
                    languages: []
                },
                helpers
            }
        },
        mounted() {
            this.getContry(this.id);
        },
        beforeRouteUpdate(to, from, next) {
            this.getContry(to.params.id);
            next();
        },
        methods: {
            async getContry(alpha) {
                try {
                    let response = await services.getContry(alpha);
                    this.country = response.data;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>