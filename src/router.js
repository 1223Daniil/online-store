import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import BasicScreen from './views/StartScreen.vue';
import Page2 from './views/Page2.vue';


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
       
     
    ]
})