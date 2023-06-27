<script>
export default {
  data() {
    return {
      imagePhone: "./src/assets/telephone.png",
      imageBug: "./src/assets/Group.png",
      imageLogo: "./src/assets/dress23.svg",
      width: 100,
      height: 100,
    };
  },
  methods: {
    goShop() {
      this.$router.push({ name: "Shop" });
    },
    goMain() {
      this.$router.push({ name: "Main" });
    },
    goBrand() {
      this.$router.push({ name: "Brand" });
    },
  },
};
</script>
<template>
  <header class="header container">
    <div class="headerContent">
      <img
        class="logo"
        :style="{
          width: width - 75 + 'px',
          height: height - 75 + 'px',
        }"
        :src="imageLogo"
      />
      Womazing
    </div>
    <div class="nav BasicText">
      <a href="#" class="header_link" @click="goMain()">Главная</a>
      <a href="#" class="header_link" @click="goShop()">Магазин</a>
      <a href="#" class="header_link" @click="goBrand()">О нас</a>
      <a href="#" class="header_link">Профиль</a>
    </div>
    <div class="contact">
      <div class="ImageContainer">
        <img :src="imagePhone" />
      </div>
      <a class="phone BasicText" href="#">+7 (495) 823-54-12</a>
      <img :src="imageBug" alt="" />
    </div>
  </header>
</template>

<style scoped>
@font-face {
  font-family: "Raleway";
  src: url(../assets/Raleway.ttf);
}
.ImageContainer {
  display: inline-flex;
  padding: 3px 4px 7px 6px;
  justify-content: center;
  align-items: center;
}
.BasicText {
  color: #000;
  font-family: "Raleway";
}
.header {
  margin-top: 42px;

  position: relative;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  z-index: 3;
}

.header_link {
  color: #000;
  font-size: 15px;
  font-family: Raleway;
  line-height: 140%;
  letter-spacing: 0.3px;
  text-decoration: none;
}

.header_link:hover {
  color: #3eabb3;
  transition: all ease-in-out 0.5s;
}

.contact {
  display: flex;
  gap: 13px;
  cursor: pointer;
}
.phone {
  margin: 0px 67px 0px 9px;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.3px;
  text-decoration: none;
}

.phone:hover {
  transition: ease 0.3s;
  color: #3eabb3;
}
.nav {
  display: flex;
  column-gap: 45px;
  line-height: 140%;
  letter-spacing: 0.3px;
  font-size: 15px;
}

.headerContent {
  color: #000;
  font-size: 16px;
  font-family: "Raleway";
  font-weight: 500;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}
.logo {
  margin-right: 11px;
}
</style>
