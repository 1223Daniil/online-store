<script>
// Компоненты
import { RouterView } from "vue-router";
import AppShopFooter from "./components/AppShopFooter.vue";
import AppShopHeader from "./components/AppShopHeader.vue";

// Главная страница
export default {
  components: {
    AppShopFooter,
    AppShopHeader,
    RouterView,
  },
};
</script>

<template>
  <div class="app">
    <!-- Шапка -->
    <app-shop-header></app-shop-header>
    <!-- Шапка -->

    <!-- Основная часть сайта -->
    <RouterView></RouterView>
    <!-- Основная часть сайта -->

    <!-- Подвал -->
    <app-shop-footer></app-shop-footer>
    <!-- Подвал -->

    <!-- Меняющаяся часть -->
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1310px;
  margin: 0 auto;
}
</style>
