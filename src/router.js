import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import BasicScreen from './views/StartScreen.vue';
import Brand from './views/AppBrand.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'page1',
            component: BasicScreen
        },
        {
            path: '/brand',
            name: 'brand',
            component: Brand
        },
     
    ]
})