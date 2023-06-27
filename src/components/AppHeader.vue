<script>
export default {
  data() {
    return {
      imagePhone: "./src/assets/telephone.png",
      imageBug: "./src/assets/Group.png",
      imageLogo: "./src/assets/dress (1) 1.svg",
      width: 100,
      height: 100,
    };
  },
};
</script>
<template>
  <nav class="header">
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
      <span>Главная</span>
      <span>Магазин</span>
      <span>О нас</span>
      <span>Профиль</span>
    </div>
    <div class="contact">
      <div class="ImageContainer">
        <img :src="imagePhone" />
      </div>
      <div class="phone BasicText">+7 (495) 823-54-12</div>
      <img :src="imageBug" />
    </div>
  </nav>
 
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
  margin: 40px 0px 50px 0px;
  display: flex;
  justify-content: space-between;
  z-index: 3;
  position: relative;
  height: 50px;
  align-items: center;
}
.contact {
  display: flex;
}
.phone {
  margin: 0px 67px 0px 9px;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.3px;
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
