<script>
export default {
  data() {
    return {
      sliders: [
        {
          Title: "Новые поступления в этом сезоне",
          description:
            "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
        },

        {
          Title: "Что-то новенькое. Мы заждались тебя. ",
          description:
            "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
        },
        {
          Title: "Включай новый сезон с WOMAZING",
          description:
            "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
        },
      ],
      index: 0,
      active: [true, false, false],
      isHidden: false,
      imageItem1: "./src/assets/girl1.jpg",
      imageItem2: "./src/assets/girl2.jpg",
      imageItem3: "./src/assets/girl3.jpg",
      imageInfo1: "./src/assets/info1.png",
      imageInfo2: "./src/assets/info2.png",
      imageInfo3: "./src/assets/info3.png",
    };
  },
  methods: {
    changeClasses() {
      const newActive = [...this.active];
      newActive.push(newActive.shift());
      this.active = newActive;
    },
    goShop() {
      this.$router.push({ name: "Shop" });
    },
    goBrand() {
      this.$router.push({ name: "Brand" });
    },
  },

  mounted() {
    setInterval(() => {
      if (this.index == 2) {
        this.index = 0;
      } else {
        this.index++;
      }
    }, 4000);
    setInterval(this.changeClasses, 4000);
  },
};
</script>
<template>
  <div class="bgColor"></div>
  <section class="container">
    <div class="slider">
      <div class="StartscreenTitle">
        <div :class="{ Title: true }">
          {{ this.sliders[this.index].Title }}
        </div>
        <div class="description">
          {{ this.sliders[this.index].description }}
        </div>
        <div class="SliderSkeep" @click="goShop()">
          <img src="../assets/Frame 9.svg" />
          <button class="slideButton" @click="goShop()">Открыть магазин</button>
        </div>
        <div class="progresBar">
          <div
            :class="{
              active: active[0],
              onActive: !active[0],
              progresItem: true,
            }"
          ></div>
          <div
            :class="{
              active: active[1],
              onActive: !active[1],
              progresItem: true,
            }"
          ></div>
          <div
            :class="{
              active: active[2],
              onActive: !active[2],
              progresItem: true,
            }"
          ></div>
        </div>
      </div>
      <div class="StartscreenImage">
        <img
          class="girlImageOne"
          src="../assets/dmitriy-7DD6tfTKqS4-unsplash 1.png"
        />
      </div>
    </div>
  </section>
  <section class="mainContent">
    <span class="collection_title">Новая коллекция</span>
    <div class="collection_block">
      <div class="collection_item" @click="goShop()">
        <img :src="imageItem1" class="" alt="" />
        <span class="card_title">Футболка USA</span>
        <span class="card_price">$129</span>
      </div>
      <div class="collection_item" @click="goShop()">
        <img :src="imageItem2" class="" alt="" width="350" height="478" />
        <span class="card_title">Купальник Glow</span>
        <span class="card_price">$129</span>
      </div>
      <div class="collection_item" @click="goShop()">
        <img :src="imageItem3" class="" alt="" />
        <span class="card_title">Свитшот Sweet Shot</span>
        <span class="card_price">$129</span>
      </div>
    </div>
    <button @click="goShop()" class="showShop_btn" id="btn">
      Открыть магазин
    </button>

    <h2>Что для нас важно</h2>
    <div class="info_block">
      <div class="info_item">
        <img class="info_img" :src="imageInfo1" />
        <h3 class="info_title">Качество</h3>
        <span class="info_text">
          Наши профессионалы работают на лучшем оборудовании для пошива одежды
          беспрецедентного качества
        </span>
      </div>
      <div class="info_item">
        <img class="info_img" :src="imageInfo2" />
        <h3 class="info_title">Скорость</h3>
        <span class="info_text">
          Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
          единиц продукции в наших собственных цехах
        </span>
      </div>
      <div class="info_item">
        <img class="info_img" :src="imageInfo3" />
        <h3 class="info_title">Ответственность</h3>
        <span class="info_text">
          Мы заботимся о людях и планете. Безотходное производство и комфортные
          условия труда - все это Womazing
        </span>
      </div>
    </div>

    <div class="team_womazing">
      <div class="team_block">
        <img class="team_img" src="../assets/team.jpg" />
        <div class="team_block_text">
          <h3>Для каждой</h3>
          <span class="team_text"
            >Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
          </span>
          <span class="team_text">
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </span>
          <a class="team_link" @click="goBrand()">Подробнее о бренде</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.bgColor {
  position: absolute;
  width: 45%;
  height: 826px;
  flex-shrink: 0;
  background: #f1eadc;
  right: 0;
  top: 0;
  z-index: 1;
}
.slider {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.Title {
  color: #000;
  font-size: 55px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 1.1px;
  margin-bottom: 45px;
}
.StartscreenTitle {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 563px;
  padding-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
}
.description {
  color: #000;
  text-align: right;
  font-size: 20px;
  font-family: Raleway;
  line-height: 140%;
  letter-spacing: 0.4px;
  margin-bottom: 52px;
  margin-right: 163px;
}
.girlImageOne {
  position: relative;
  z-index: 3;
}
.slideButton {
  padding: 22px 50px;
  align-items: center;
  background: var(--cta, #6e9c9f);
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-family: Raleway;
  line-height: 138.9%;
  letter-spacing: 0.34px;
  border: none;
}
.SliderSkeep {
  margin-right: 163px;
  margin-left: auto;
  margin-bottom: 14px;
}
.girlImageTwo {
  position: absolute;
  z-index: 4;
  right: 10%;
  bottom: 20%;
}
.girlImageTree {
  position: absolute;
  z-index: 4;
}
.progresItem {
  width: 30px;
  height: 4px;
}
.progresBar {
  display: flex;
  gap: 12px;
  margin-top: 100px;
  margin-left: 270px;
}
.active {
  background: #000;
}
.onActive {
  background: #d1d1d1;
}
.fade-out {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.fade-in {
  opacity: 1;
  transition: opacity 1s ease-in;
}

.mainContent {
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 130px;
  text-align: left;
}

.collection_title {
  margin-bottom: 92px;
  color: #000;
  font-size: 40px;
  font-family: Raleway;
}
.collection_block {
  display: flex;
  align-items: center;
  gap: 30px;
}

.collection_item {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.showShop_btn {
  margin-top: 65px;
  padding: 22px 50px;
  text-align: center;
  border: 1px solid #6e9c9f;
  color: #6e9c9f;
  font-size: 17px;
  font-family: Raleway;
  line-height: 138.9%;
}

.info_block {
  display: flex;
  align-items: center;
  gap: 30px;
}

.info_item {
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 37px;
}

.info_text {
  color: #000;
  font-size: 17px;
  font-family: Raleway;
}

.info_img {
  width: 61px;
  height: 61px;
}

.team_womazing {
  display: flex;
  flex-direction: column;
  gap: 92px;
}

.team_block {
  display: flex;
  gap: 124px;
}

.team_block_text {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 255px;
  font-size: 17px;
}

.team_text {
  font-family: "Raleway";
}
</style>
