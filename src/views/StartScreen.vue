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
    };
  },
  methods: {
    changeClasses() {
      const newActive = [...this.active];
      newActive.push(newActive.shift());
      this.active = newActive;
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
  <section>
    <div class="slider">
      <div class="StartscreenTitle">
        <div :class="{ Title: true }">
          {{ this.sliders[this.index].Title }}
        </div>
        <div class="description">
          {{ this.sliders[this.index].description }}
        </div>
        <div class="SliderSkeep">
          <img src="../assets/Frame 9.svg" />
          <button class="slideButton">Открыть магазин</button>
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
</style>
