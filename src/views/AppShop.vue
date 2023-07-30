<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cards"]),
  },
  data() {
    return {
      jacket: [],
      Coat: [],
      sweatshirt: [],
      activeButton: 1,
    };
  },
  methods: {
    async loadjacket() {
      let response = await axios.get("/jacket");
      this.jacket = response.data;
    },
    async loadCoat() {
      let response = await axios.get("/Coat");
      this.Coat = response.data;
    },
    async loadsweatshirt() {
      let response = await axios.get("/sweatshirt");
      this.sweatshirt = response.data;
    },
  },
  mounted() {
    this.loadAll();
    this.loadsweatshirt();
    this.loadjacket();
    this.loadCoat();
  },
};
</script>

<template>
  <main>
    <section class="card_block__clothing container">
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
          <button
            @click="activeButton = 1"
            :class="{ active: activeButton === 1, category_item__btn: true }"
          >
            Все
          </button>
          <button
            @click="activeButton = 2"
            :class="{ active: activeButton === 2, category_item__btn: true }"
          >
            Пальто
          </button>
          <button
            :class="{ active: activeButton === 3, category_item__btn: true }"
            @click="activeButton = 3"
          >
            Платье
          </button>
          <button
            @click="activeButton = 4"
            :class="{ active: activeButton === 4, category_item__btn: true }"
          >
            Толстовки
          </button>
        </div>

        <p class="show_product">Показано: 9 из 12 товаров</p>

        <div class="cardContainer" v-if="activeButton == 1">
          <div
            class="card_item"
            v-for="(item, index) in cards"
            v-bind:key="item._id"
          >
            <img
              width="350"
              height="478"
              :src="'../src/assets/' + item.image"
              class=""
              alt=""
            />
            <span class="card_title">{{ item.title }}</span>
            <span class="card_price">{{ item.price }}</span>
          </div>
        </div>

        <div class="cardContainer" v-if="activeButton == 2">
          <div
            class="card_item"
            v-for="(item, index) in Coat"
            v-bind:key="item._id"
          >
            <img
              width="350"
              height="478"
              :src="'../src/assets/' + item.image"
              class=""
              alt=""
            />
            <span class="card_title">{{ item.title }}</span>
            <span class="card_price">{{ item.price }}</span>
          </div>
        </div>

        <div class="cardContainer" v-if="activeButton == 3">
          <div
            class="card_item"
            v-for="(item, index) in sweatshirt"
            v-bind:key="item._id"
          >
            <img
              width="350"
              height="478"
              :src="'../src/assets/' + item.image"
              class=""
              alt=""
            />
            <span class="card_title">{{ item.title }}</span>
            <span class="card_price">{{ item.price }}</span>
          </div>
        </div>

        <div class="cardContainer" v-if="activeButton == 4">
          <div
            class="card_item"
            v-for="(item, index) in jacket"
            v-bind:key="item._id"
          >
            <img
              width="350"
              height="478"
              :src="'../src/assets/' + item.image"
              class=""
              alt=""
            />
            <span class="card_title">{{ item.title }}</span>
            <span class="card_price">{{ item.price }}</span>
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
  font-family: "Raleway";
  src: url(../assets/Raleway.ttf);
}

.cardContainer {
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
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
  margin-top: 190px;
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
.category_item__btn:hover {
  color: #fff;
  background: #000;
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
  margin-right: 30px;
  margin-bottom: 65px;
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
