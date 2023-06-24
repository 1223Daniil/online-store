import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'page1',
            component: Page1,
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        }
    ]
})