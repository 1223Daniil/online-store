<script>
export default {
	data() {
		let images = [{}]
	},
}
</script>

<template>
	<main>
		<section class="card_block__clothing">
			<section class="card_block__clothing_wrap">
				<div class="title_block">
					<h1 class="title">Магазин</h1>
					<div class="title_info">
						<h3 class="title_item1">Главная</h3>
						<img class="title_vector" src="../assets/vector.svg" />
						<h4 class="title_item2">Магазин</h4>
					</div>
				</div>

				<div class="category_block">
					<button class="category_item__btn">Все</button>
					<button class="category_item__btn">Пальто</button>
					<button class="category_item__btn">Свитшоты</button>
					<button class="category_item__btn">Кардиганы</button>
					<button class="category_item__btn">Толстовки</button>
				</div>

				<p class="show_product">Показано: 9 из 12 товаров</p>
				<div class="card_block">
					<div class="card_item">
						<img src="../assets/girl1.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl2.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl3.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>
				</div>

				<div class="card_block">
					<div class="card_item">
						<img src="../assets/girl1.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl2.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl3.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>
				</div>

				<div class="card_block">
					<div class="card_item">
						<img src="../assets/girl1.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl2.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>

					<div class="card_item">
						<img src="../assets/girl3.jpg" class="" alt="" />
						<span class="card_title">Футболка USA</span>
						<span class="card_price">$129</span>
					</div>
				</div>

				<p class="show_product">Показано: 9 из 12 товаров</p>

				<div class="card_slidder">
					<button class="card_slidder__btn">1</button>
					<button class="card_slidder__btn">2</button>
					<img class="card_slidder__img" src="../assets/Vector 1.svg" alt="" />
				</div>
			</section>
		</section>
	</main>
</template>
<style>
@font-face {
	font-family: 'Raleway';
	src: url(../assets/Raleway.ttf);
}

.title_block {
	color: #000;
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 26px;
}

.title_info {
	display: flex;
	align-items: center;
	gap: 13px;
}

.title_item1 {
	font-size: 17px;
	font-family: Raleway;
	line-height: 140%;
	letter-spacing: 0.34px;
}

.title_vector {
	color: #000;
}
.title_item2 {
	color: #909090;
	font-size: 17px;
	font-family: Raleway;
	line-height: 140%;
	letter-spacing: 0.34px;
}
.title {
	color: #000;
	font-size: 55px;
	font-family: Raleway;
	line-height: 110%;
	letter-spacing: 1.1px;
}

.card_block__clothing {
	display: flex;
	justify-content: center;
}

.card_block__clothing_wrap {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 65px;
}

.category_block {
	display: flex;
	gap: 10px;
}

.category_item__btn:nth-child(1) {
	color: #fff;
	background: #000;
}
.category_item__btn {
	color: #000;
	padding: 19px 65px;
	background: none;
	border: 1px solid #000;
	text-align: center;
	font-size: 17px;
	font-family: Raleway;
	line-height: 140%;
	letter-spacing: 0.34px;
}
.card_block {
	display: flex;
	align-items: center;
	gap: 30px;
}

.card_item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
}

.card_title {
	color: #000;
	font-size: 20px;
	line-height: 140%;
	letter-spacing: 0.4px;
}

.card_price {
	color: #998e78;
	font-size: 15px;
	line-height: 140%;
	letter-spacing: 0.3px;
}

.show_product {
	color: #808080;
	font-size: 17px;
	font-family: Raleway;
	line-height: 140%;
	letter-spacing: 0.34px;
}

.card_slidder {
	display: flex;
	align-items: center;
	gap: 14px;
}

.card_slidder__btn {
	padding: 9px 0px 8px 0px;
	width: 41px;
	background: #000;
	text-align: center;
	color: #fff;
	font-size: 17px;
	line-height: 140%;
	letter-spacing: 0.34px;
}

.card_slidder__btn:nth-child(2) {
	color: #000;
	background: none;
	border: 1px solid #000;
}
</style>
