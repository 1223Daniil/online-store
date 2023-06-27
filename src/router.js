import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import Brand from './views/AppBrand.vue';
import AppShop from './views/AppShop.vue'
import AppMain from './views/AppMain.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
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
        }
    ]
})