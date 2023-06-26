<script>
// Компоненты
import { RouterView } from 'vue-router'
import AppShopFooter from './components/AppShopFooter.vue'
import AppMain from './components/AppMain.vue'
import AppShopHeader from './components/AppShopHeader.vue'
import AppShop from './components/AppShop.vue'
// Главная страница
export default {
	components: {
		AppMain,
		AppShopFooter,
		AppShopHeader,
		AppShop,
		RouterView,
	},
}
</script>

<template>
	<div class="app">
		<!-- Шапка -->
		<app-shop-header></app-shop-header>
		<!-- Шапка -->

		<!-- Основная часть сайта -->
		<app-shop></app-shop>
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
</style>
