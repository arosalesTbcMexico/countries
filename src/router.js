import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'countries',
            component: () => import('./views/Countries')
        },
        {
            path: '/:id/details',
            name: 'country-details',
            props: true,
            component: () => import('./views/CountryDetails')
        }
    ]
});