import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import Brand from './views/AppBrand.vue';
import AppShop from './views/AppShop.vue'
import AppMain from './views/AppMain.vue'
import AppRegistration from './views/AppRegistration.vue'
import AppContact from './views/AppContact.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'registration',
            component:AppRegistration
        },
        {
            path: '/Main',
            name: 'Main',
            component: AppMain,
        },
        {
            path: '/brand',
            name: 'Brand',
            component: Brand,
        },
        {
            path: '/shop',
            name: 'Shop',
            component: AppShop
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: AppContact
        },
       


        // {
        //     path: '/registration',
        //     name: 'registration',
        //     component:AppRegistration
        // },
        // {
        //     path: '/',
        //     name: 'Main',
        //     component: AppMain,
        // },
        // {
        //     path: '/brand',
        //     name: 'Brand',
        //     component: Brand,
        // },
        // {
        //     path: '/shop',
        //     name: 'Shop',
        //     component: AppShop
        // },
    ]
})